const convert = require('./conversionHelper');
const framesCollection = require('./framesCollection').framesCollection;
const productsList = require('./productsList').productsList;

module.exports = function(RED) {	
    function DecoderNode(config){
        RED.nodes.createNode(this,config);        
        this.detection = config.detection;
        this.product = config.product;
        this.custom = RED.nodes.getNode(config.custom);
        this.productlist = productsList;      
        
        var node = this; 
        
        node.on('input', function(input) {    
            if(typeof input.payload !== "object"){   
                input.payload = input.payload.toString('utf8'); 
                try { 
                    input.payload = JSON.parse(input.payload);			
                }
                catch(e) { 
                    node.warn(RED._("httpin.errors.json-error")); 
                }
            }
					
            
            if(node.detection == "auto"){
                var productName = input.payload.product;
            }else{
                var productName = node.product;
            }   
            
            
            var product = productsList[productName];
            
            if(product != undefined && product.collectionId != null){
                var parse = parseMessage(product, input.payload);
                input.payload.channels = parse[0];
                input.payload.frameName = parse[1];
            }else{ //CUSTOM
                switch(productName){
                    case "ATIM_AST/LW8":
                       var decoder = {
                                "primaryKey_start":0,
                                "primaryKey_end":1,
                                "frames":{
                                    "50":{
                                        "name":"Trame AST",
                                        "type":"PERIODIC",
                                        "channels":[
                                            {"name":"Vibration","type":"boolean","start":2,"end":2,"calcul":"{x}","unit":null,"delay":0},
                                            {"name":"ILS","type":"boolean","start":4,"end":5,"calcul":"{x}","unit":null,"delay":0},
                                            {"name":"Temperature","type":"int","start":6,"end":7,"calcul":"(2103-{x})/10.9","unit":"°C","delay":0},
                                            {"name":"Push","type":"boolean","start":3,"end":3,"calcul":"{x}","unit":null,"delay":0}
                                        ]
                                    }
                                }
                        };
                        
                        var parse = parseMessage({collectionId:0}, input.payload, decoder);
                        input.payload.channels = parse[0];
                        input.payload.frameName = parse[1];
                        break;
                    case "ATIM_SDK":
                        break;
                    case "ATIM_ACW/LW8-TST":
                        break;
                    case "ATIM_ACW/LW8-TH":
                        break;
                    case "CUSTOM":
                        if(node.custom){
                            var collection = node.custom.collection;
                            var decoder = {};
                            decoder.primaryKey_start = collection.primaryKey_start;
                            decoder.primaryKey_end = collection.primaryKey_end;
                            decoder.frames = JSON.parse(collection.payload);
                            var parse = parseMessage({collectionId:0}, input.payload, decoder);
                            input.payload.channels = parse[0];
                            input.payload.frameName = parse[1];
                        }
                        
                        break;
                    default:
                        break;
                }
            }            
			if(input.payload.frameName != undefined)
                node.send(input);			
        });
    };
    
    function parseMessage(product, payload, decoder){        
        var data = payload.data;
        var datetime =  new Date(payload.datetime);
        var collectionId =  product.collectionId;        
        
        var channels = {};        
        if(!decoder){
           var collection = framesCollection[collectionId]; 
        }else{
            var collection = decoder;
        }
        
        if(product.id == 18 || product.id == 37){ // GW/RPT Sigfox
            if(data.length == 24){ // GW/RPT Frame is full size length(12 Bytes)
                var addressHex = data.substr(-2).toUpperCase(); //1 Byte Address is at the end of the frame (Last byte of deviceId Sigfox)
                var addressDec = parseInt(addressHex,16);
            }
        }
        
        if(collection != undefined){
            var header = data.slice(collection.primaryKey_start, collection.primaryKey_end * 2) || 0;
            var frame = collection.frames[header];            
            if(frame == undefined){
                Object.keys(collection.frames).forEach(function(frameHeader){   

                    var headerXX = header.substr(0,2)+"##"; 
                    if(header.length >= 4)
                        var headerXXXX = header.substr(0,2)+"####";                    
                    if(header.length >= 6)
                        var headerXXXXXX = header.substr(0,2)+"######";                    
                    if(header.length >= 8)
                        var headerXXXXXXXX = header.substr(0,2)+"##########";
                    
                    if(frameHeader == headerXX){
                        frame = collection.frames[headerXX];
                    }else if(frameHeader == headerXXXX){
                        frame = collection.frames[headerXXXX]; 
                    }else if(frameHeader == headerXXXXXX){                        
                        frame = collection.frames[headerXXXXXX];
                    }else if(frameHeader == headerXXXXXXXX){                        
                        frame = collection.frames[headerXXXXXXXX];
                    }
                });                             
            }      

                
            if(frame !== undefined){
                frame.channels.forEach(function(channel){     
                    var channel_name = channel.name;//.replace(/" "/gi, "_").toLowerCase();
                    var val_raw = data.slice((channel.start*2)-2, channel.end *2);
                    var delay = channel.delay || 0;
                    var mesure_datetime = new Date(datetime.getTime() - (delay * 60000))

                    if(channels[channel_name] == undefined){                        
                        channels[channel_name] = {};
                        channels[channel_name].unit = channel.unit;
                    }                    
                    
                    var value = {};
                    value.datetime = mesure_datetime;
                    value.raw_value = val_raw;
                    
                    if(addressDec != undefined){
                        value.address = addressDec;
                    }

                    var val_buffer = convert.hexStringToBuf(val_raw);
                    var data_calcul = 0;

                    if(val_buffer != null){											
                        var dataConvert= convert.converter(val_buffer,channel.type);
                        data_calcul = channel.calcul.replace(/{x}/gi, dataConvert);		
                    }else{
                        console.error(val_buffer, val_raw, channel);
                    }                

                    value.decoded_value = eval(data_calcul);
                    
                    if(channels[channel_name].values == undefined){
                        channels[channel_name].values = [];
                    }                    
                    channels[channel_name].values.push(value);                    
                });
            }
        }
        
        if(frame == undefined){
            frame = {name : undefined};
        }        
        return [channels, frame.name];
    };
    
    RED.nodes.registerType("atim-parser",DecoderNode);
}