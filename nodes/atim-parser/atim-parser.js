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
					
            var data = input.payload.data;
            
            if(node.detection == "auto"){
                var productName = input.payload.product;
            }else{
                var productName = node.product;
            }   
            
            
            var product = productsList[productName];
            
            if(product != undefined && product.collectionId != null){
                input.payload.channels = parseMessage(product.collectionId, data);
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
                        
                        input.payload.channels = parseMessage(0, data, decoder);
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
                            input.payload.channels = parseMessage(0, data, decoder);
                        }
                        
                        break;
                    default:
                        break;
                }
            }
            
			
            node.send(input);			
        });
    };
    
    function parseMessage(collectionId, data, decoder){
        var channels = {};        
        if(!decoder){
           var collection = framesCollection[collectionId]; 
        }else{
            var collection = decoder;
        }
            
            if(collection != undefined){
                var header = data.slice(collection.primaryKey_start, collection.primaryKey_end * 2) || 0;
                var frame = collection.frames[parseInt(header,16)];

                if(frame != undefined){            
                    frame.channels.forEach(function(channel){                 
                        var channel_name = channel.name;//.replace(/" "/gi, "_").toLowerCase();
                        var val_raw = data.slice((channel.start*2)-2, channel.end *2);
                        channels[channel_name] = {};
                        channels[channel_name].unit = channel.unit;
                        channels[channel_name].raw_value = val_raw;

                        var val_buffer = convert.hexStringToBuf(val_raw);
                        var data_calcul = 0;

                        if(val_buffer != null){											
                            var dataConvert= convert.converter(val_buffer,channel.type);
                            data_calcul = channel.calcul.replace(/{x}/gi, dataConvert);		
                        }else{
                            console.error(val_buffer, val_raw, channel);
                        }                

                        channels[channel_name].decoded_value = eval(data_calcul);
                    });
                }
            }
        
        
        
        return channels;
    };
    
    RED.nodes.registerType("atim-parser",DecoderNode);
}