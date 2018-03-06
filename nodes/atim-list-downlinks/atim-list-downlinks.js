var request = require('request');

module.exports = function(RED) {	
    function GetDownlinks(config) {
        RED.nodes.createNode(this,config);        
        this.user = RED.nodes.getNode(config.user);
        
        var node = this;
        
		
        node.on('input', function(input) {                  
			var preRequestTimestamp = process.hrtime();			
			var msg = {};					
			node.status({fill: "blue",shape: "dot",text: "httpin.status.requesting"});
			
			var opts = {
				method: "GET",
				url: "http://localhost:8080/api/txframes",
				timeout: 5000,
                auth: {
                    'user': node.user.name,
                    'pass': node.user.password,
                    'sendImmediately': false
                }
			};
			
			request(opts, function (error, response, body) {
				node.status({});
				if (error) {
					if (error.code === 'ETIMEDOUT') {
						node.error(RED._("common.notification.errors.no-response"), msg);
						setTimeout(function () {
						node.status({
							fill: "red",
							shape: "ring",
							text: "common.notification.errors.no-response"
						});
						}, 10);
					}else{
						node.error(error, msg);
						msg.payload = error.toString() + " : " + opts.url;
						msg.statusCode = error.code;
						node.send(msg);
                        if(msg.payload == "Error: no auth mechanism defined : http://localhost:8080/api/nodes"){
                           node.status({
                                fill: "red",
                                shape: "ring",
                                text: "Authentication failed"
                            });  
                        }else{                           
                            node.status({
                                fill: "red",
                                shape: "ring",
                                text: msg.payload
                            }); 
                        }
					}
				}else{
					msg.payload = body;
					msg.headers = response.headers;
					msg.statusCode = response.statusCode;
					if (node.metric()) {
						var diff = process.hrtime(preRequestTimestamp);
						var ms = diff[0] * 1e3 + diff[1] * 1e-6;
						var metricRequestDurationMillis = ms.toFixed(3);
						node.metric("duration.millis", msg, metricRequestDurationMillis);
						if (response.connection && response.connection.bytesRead) {
							node.metric("size.bytes", msg, response.connection.bytesRead);
						}
					}
					
					msg.payload = msg.payload.toString('utf8'); 					
					try { 
						msg.payload = JSON.parse(msg.payload);  
                        if(typeof input.payload !== "object"){
                            input.payload = JSON.parse(input.payload);
                        }
                        
				        input.payload.downlinks = msg.payload;                        
						node.send(input);						
					}
					catch(e) { 
						node.warn(RED._("httpin.errors.json-error")); 
					}					
				}
			})			
        });
    }
	
	
    RED.nodes.registerType("atim-list-downlinks",GetDownlinks);
}