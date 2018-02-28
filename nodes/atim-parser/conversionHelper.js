
function converter(message, type){
	var output;
	if (type == "int"){
		if (message.length == 1){
			output = message.readUInt8(0);
		}else if (message.length == 2){
			output = message.readUInt16BE(0);
		}else if (message.length == 3){
			message = Buffer.concat([new Buffer([0x00]),message], 4);
			output = message.readUInt32BE(0);
		}else if (message.length == 4){
			output = message.readUInt32BE(0);
		}else{
			output = message.readUIntBE(0, message.length);
		}
		//output = hexToInt(message);
	}else if (type == "sint"){
		if (message.length == 1){
			output = message.readInt8(0);
		}else if (message.length == 2){
			output = message.readInt16BE(0);
		}else if (message.length == 3){
			message = Buffer.concat([new Buffer([0x00]),message], 4);
			output = message.readInt32BE(0);
		}else if (message.length == 4){
			output = message.readInt32BE(0);
		}else{
			output = message.readIntBE(0, message.length);
		}
	}else if (type == "text"){
		output = message.toString();
	}else if (type == "float32" || type == "float"){
		output = Math.round((message.readFloatBE(0))*100)/100 ;
	}else if (type == "float64" || type == "double"){
		output = message.readDoubleBE(0);
	}else if (type == "bin"){
		output = hex2Bin(message.toString('hex'));
	}else if (type == "boolean"){
		output = hexToBool(message.toString('hex'),0);
	}else if (type == "hex"){
		output = message.toString('hex');
	}
	return output;
}

function hexStringToBuf(brutMessage){
	if(!checkHex(brutMessage))return null;
	if ( brutMessage.length % 2 !== 0){
		console.error("Wrong hexa input");
		return;
	}
	var buf = new Buffer(brutMessage,'hex');
	return buf;
}

function checkHex(n){return/^[0-9A-Fa-f]{1,64}$/.test(n)}

function hex2ascii(hexx) {
	var hex = hexx.toString();// force conversion
	var str = '';
	for (var i = 0; i < hex.length; i += 2)
		str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
}

function hexToBool(hex,index){
	if (index >= hex.length*4) return null;
	return Boolean(parseInt(hex2Bin(hex).charAt(index)));
}

function hex2Bin(n){
	if(!checkHex(n))return null;
	return parseInt(n,16).toString(2);
}

function hexToInt(hex){
	if(!checkHex(hex))return null;
	return parseInt(hex,16);
}

function hexTo32Float(hex){
	if(!checkHex(hex))return null;
	var float;
	if (hex == '7f800000'){
		float = "inf";
		return float;
	}else if (hex == 'ff800000'){
		float = "-inf";
		return float;
	}else if (hex == '00000000' || hex =='80000000'){
		float = 0.0;
		return float;
	}
	var a = parseInt(hex, 16);
	if ((a >= 8388608 && a <= 133693439) || (a >= 134742016 && a <= 267911167)){
		//a & 0x7fffff => mantisse
		
		float = (a>>31 | 0x1) * (a & 0x7fffff | 0x800000) * 1.0 / Math.pow(2,23) * Math.pow(2,  ((a>>23 & 0xff) - 127));
		return float;
	}else if ((a >= 1 && a < 8388608) || (a >= 2147483649 && a < 134742016)){
		float = (a>>31 | 0x1) * (((a & 0x7fffff | 0x800000) * 1.0 / Math.pow(2,23))-1)* Math.pow(2,  ((a>>23 & 0xff) - 126));
		return float;
	}else{
		//NaN
		float = "NaN";
		return float;
	}

}

function hexTo16Float(hex){
	if(!checkHex(hex))return null;
	var float;
	if (hex == '7c00'){
		float = "inf";
		return float;
	}else if (hex == 'fc00'){
		float = "-inf";
		return float;
	}else if (hex == '0000' || hex =='8000'){
		float = 0.0;
		return float;
	}
	var a = parseInt(hex, 16);
	if ((a >= 1024 && a <= 31743) || (a >= 33792 && a <= 64511)){
		//a & 0x7fffff => mantisse
		s = a >> 15 ? -1 : 1;
		float = s * (a & 0x3ff | 0x400) * 1.0 / Math.pow(2,10) * Math.pow(2,  ((a>>10 & 0x1f) - 15));
		return float;
	}else if ((a >= 1 && a < 1024) || (a >= 32769 && a < 33792)){
		s = a >> 15 ? -1 : 1;
		float = s * (((a & 0x3ff | 0x400) * 1.0 / Math.pow(2,10))-1)* Math.pow(2,  ((a>>10 & 0x1f) - 14));
		return float;
	}else{
		//NaN
		float = "NaN";
		return float;
	}
}

//////////////////////////////////////////
exports.hexStringToBuf = hexStringToBuf;
exports.hex2ascii = hex2ascii;
exports.converter = converter;
