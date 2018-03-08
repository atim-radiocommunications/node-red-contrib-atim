var framesCollection = {
    "1": {
        "name": "ACW2015",
        "primaryKey_start": 0,
        "primaryKey_end": 1,
        "frames": {
            "10": {
                "name": "Low t° threshold alert end",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "(({x}*175.72)/65536)-46.85",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Humidity",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "(({x}*125)/65536)-6",
                    "unit": "%",
                    "delay": 0
                }]
            },
            "11": {
                "name": "High t° threshold alert begin",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "(({x}*175.72)/65536)-46.85",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Humidity",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "(({x}*125)/65536)-6",
                    "unit": "%",
                    "delay": 0
                }]
            },
            "12": {
                "name": "High t° threshold alert end",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "(({x}*175.72)/65536)-46.85",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Humidity",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "(({x}*125)/65536)-6",
                    "unit": "%",
                    "delay": 0
                }]
            },
            "13": {
                "name": "Water leak detection",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Water Level",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "14": {
                "name": "Meter reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Wirecut",
                    "type": "boolean",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Index 1",
                    "type": "int",
                    "start": 3,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Index 2",
                    "type": "int",
                    "start": 7,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "15": {
                "name": "Relevé périodique de la temperature",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature PT100",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}-33184)/128",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "16": {
                "name": "Reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 3",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 4",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Wirecut",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Index 1",
                    "type": "int",
                    "start": 4,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Index 2",
                    "type": "int",
                    "start": 8,
                    "end": 11,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "17": {
                "name": "Temperature and humidity reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "(({x}*175.72)/65536)-46.85",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Humidity",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "(({x}*125)/65536)-6",
                    "unit": "%",
                    "delay": 0
                }]
            },
            "18": {
                "name": "Voltage analog reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Voltage",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "{x}*((10-0)/64240)",
                    "unit": "V",
                    "delay": 0
                }, {
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }]
            },
            "19": {
                "name": "Current analog reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Current",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "{x}*((20-4)/47584)",
                    "unit": "mA",
                    "delay": 0
                }, {
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }]
            },
            "26": {
                "name": "Low T° threshold alert begin",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "27": {
                "name": "Low T° threshold alert end",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "28": {
                "name": "High T° threshold alert begin",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "29": {
                "name": "High T° threshold alert end",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "30": {
                "name": "Meter Multi-reading",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Index",
                    "type": "int",
                    "start": 2,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 50
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 6,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 40
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 10,
                    "end": 13,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 14,
                    "end": 17,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 18,
                    "end": 21,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 10
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 22,
                    "end": 25,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "31": {
                "name": "Trame Test",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Index",
                    "type": "int",
                    "start": 2,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "32": {
                "name": "Sensor reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Light",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Mic",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Vibration",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "ILS",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Counter",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Battery voltage",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }]
            },
            "37": {
                "name": "Wirecut",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Wirecut",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "39": {
                "name": "Meter Multi-reading",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Index",
                    "type": "int",
                    "start": 2,
                    "end": 4,
                    "calcul": "({x} & 16777200)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 10
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 6,
                    "end": 7,
                    "calcul": "({x} & 65520)/16",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "({x} & 65520)/16",
                    "unit": null,
                    "delay": 40
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 10,
                    "end": 11,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 50
                }]
            },
            "41": {
                "name": "16 Input + Temperature",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 3",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 4",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 5",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 6",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 7",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 8",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 9",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 10",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 11",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 12",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 13",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 14",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 15",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 16",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "{x}/10",
                    "unit": null,
                    "delay": 0
                }]
            },
            "42": {
                "name": "16 Input",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 3",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 4",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 5",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 6",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 7",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 8",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 9",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 10",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 11",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 12",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 13",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 14",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 15",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 16",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }]
            },
            "43": {
                "name": "Shock/Alarm",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Compteur Shock",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "44": {
                "name": "Water leak detection + Temperature",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Alerte",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 30
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 6,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 4,
                    "end": 4,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 20
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 5,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 10
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 7,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 30
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 8,
                    "end": 8,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 20
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 9,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 10
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 10,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 10
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }]
            },
            "45": {
                "name": "Water leak detection + Temperature",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "46": {
                "name": "Water leak detection + Temperature",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 4,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 5,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 6,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 7,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 10
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 10,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 8,
                    "end": 8,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 10
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 9,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 10
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 30
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 20
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 10
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Alerte",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "47": {
                "name": "Water leak detection + Temperature",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 4,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 5,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 40
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 7,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 9,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 6,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 40
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 8,
                    "end": 8,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 10,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 40
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 20
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 60
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 20
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 40
                }, {
                    "name": "Alerte",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "48": {
                "name": "Water leak detection + Temperature",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 90
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 90
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 4,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 90
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 5,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 6,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 9,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 10,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 7,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 8,
                    "end": 8,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 90
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 30
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 60
                }, {
                    "name": "Alerte",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "49": {
                "name": "Water leak detection + Temperature",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 180
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 4,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 180
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 180
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 9,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 10,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 7,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 8,
                    "end": 8,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 5,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 6,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 180
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 60
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 120
                }, {
                    "name": "Alerte",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "50": {
                "name": "Compteur 1 + Compteur 2",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Compteur 1",
                    "type": "int",
                    "start": 2,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur 2",
                    "type": "int",
                    "start": 6,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "51": {
                "name": "Compteur 3 + Compteur 4",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Compteur 3",
                    "type": "int",
                    "start": 2,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur 4",
                    "type": "int",
                    "start": 6,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "52": {
                "name": "16 Input + Compteur 1",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 3",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 4",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 5",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 6",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 7",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 8",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 9",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 10",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 11",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 12",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 13",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 14",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 15",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 16",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur 1",
                    "type": "int",
                    "start": 4,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "53": {
                "name": "TEMPERATURE_TM2D_S1_LOW_S2_LOW",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "54": {
                "name": "TEMPERATURE_TM2D_S1_LOW_S2_LOW",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "55": {
                "name": "TEMPERATURE_TM2D_S1_LOW_S2_HIG",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "56": {
                "name": "TEMPERATURE_TM2D_S1_COV_S2_LOW",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "57": {
                "name": "TEMPERATURE_TM2D_S1_COV_S2_COV",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "58": {
                "name": "TEMPERATURE_TM2D_S1_COV_S2_HIG",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "59": {
                "name": "TEMPERATURE_TM2D_S1_HIG_S2_LOW",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "01": {
                "name": "Keep alive",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Idle Supply Voltage",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }, {
                    "name": "Tx Supply Voltage",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }]
            },
            "05": {
                "name": "Test Frame",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Frame Counter Test",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "09": {
                "name": "Interrupt alert",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Input 1",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }]
            },
            "0A": {
                "name": "Interrupt alert",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 3",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 4",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }]
            },
            "0B": {
                "name": "Dépassement de seuil bas détecté",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature PT100",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}-33184)/128",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "0C": {
                "name": "Low t° threshold alert end",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature PT100",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}-33184)/128",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "0D": {
                "name": "High t° threshold alert begin",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature PT100",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}-33184)/128",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "0E": {
                "name": "High t° threshold alert end",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature PT100",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}-33184)/128",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "0F": {
                "name": "Low t° threshold alert begin",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "(({x}*175.72)/65536)-46.85",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Humidity",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "(({x}*125)/65536)-6",
                    "unit": "%",
                    "delay": 0
                }]
            },
            "1A": {
                "name": "Temperature reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 2,
                    "end": 5,
                    "calcul": "(Math.abs((({x}&0xFFFF)-(({x}&0xFFFF0000)>>16)))*0.0625)\r\n",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "1B": {
                "name": "Temperature reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "1C": {
                "name": "Digital Temperature Humidity",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Temperature",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x} * 0.1",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Humidity",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "{x} * 0.1",
                    "unit": "%",
                    "delay": 0
                }]
            },
            "1D": {
                "name": "Ultrsound distance reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Niveau",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}/4)",
                    "unit": null,
                    "delay": 0
                }]
            },
            "2A": {
                "name": "Low T° threshold alert begin",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "2B": {
                "name": "Low T° threshold alert end",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "2C": {
                "name": "High T° threshold alert begin",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "2D": {
                "name": "High T° threshold alert end",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "6A": {
                "name": "Keyapp frame",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Frame Counter Test",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "F0": {
                "name": "Meter reading",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Wirecut",
                    "type": "boolean",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Index 1",
                    "type": "int",
                    "start": 3,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Index 2",
                    "type": "int",
                    "start": 7,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "3A": {
                "name": "Meter Multi-reading",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Index",
                    "type": "int",
                    "start": 2,
                    "end": 4,
                    "calcul": "({x} & 16777200)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 6,
                    "end": 7,
                    "calcul": "({x} & 65520)/16",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 90
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "({x} & 65520)/16",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 10,
                    "end": 11,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 150
                }]
            },
            "3B": {
                "name": "Meter Multi-reading",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Index",
                    "type": "int",
                    "start": 2,
                    "end": 4,
                    "calcul": "({x} & 16777200)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 6,
                    "end": 7,
                    "calcul": "({x} & 65520)/16",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 180
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "({x} & 65520)/16",
                    "unit": null,
                    "delay": 240
                }, {
                    "name": "Delta",
                    "type": "int",
                    "start": 10,
                    "end": 11,
                    "calcul": "({x} & 4095)",
                    "unit": null,
                    "delay": 300
                }]
            },
            "2E": {
                "name": "Differential pressure",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Differential pressure",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x}/60",
                    "unit": "Pa",
                    "delay": 0
                }]
            },
            "4A": {
                "name": "Water leak detection + Temperature",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 360
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 4,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 360
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 360
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 240
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 9,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 10,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 7,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 8,
                    "end": 8,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 5,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 240
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 6,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 240
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 360
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 120
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 240
                }, {
                    "name": "Alerte",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "4B": {
                "name": "Water leak detection + Temperature",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 720
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 4,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 720
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 480
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 240
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 9,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 10,
                    "end": 10,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 7,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 240
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 8,
                    "end": 8,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 240
                }, {
                    "name": "Temperature 1",
                    "type": "sint",
                    "start": 5,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 480
                }, {
                    "name": "Temperature 2",
                    "type": "sint",
                    "start": 6,
                    "end": 6,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 480
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 720
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 240
                }, {
                    "name": "Delta Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "Math.abs((({x}&0xFF)-(({x}&0xFF00)>>8)))",
                    "unit": "°C",
                    "delay": 480
                }, {
                    "name": "Alerte",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Eau",
                    "type": "int",
                    "start": 11,
                    "end": 11,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 720
                }]
            },
            "4E": {
                "name": "16 Input + Temperature + Compteur 1",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 3",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 4",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 5",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 6",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 7",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 8",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 9",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 10",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 11",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 12",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 13",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 14",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 15",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 16",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "{x}/10",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur 1",
                    "type": "int",
                    "start": 6,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "4F": {
                "name": "16 Input + Compteur 1 + Compteur 2",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Input 1",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 2",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 3",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 4",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 5",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 6",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 7",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 8",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 9",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 10",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 11",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 12",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 13",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 14",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 15",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Input 16",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur 1",
                    "type": "int",
                    "start": 4,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur 2",
                    "type": "int",
                    "start": 8,
                    "end": 11,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "3E": {
                "name": "Trame PIR",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Détection de mouvement",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Présence",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "0",
                    "unit": null,
                    "delay": 0
                }]
            },
            "3F": {
                "name": "Trame PIR",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Détection de mouvement",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Présence",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "1",
                    "unit": null,
                    "delay": 0
                }]
            },
            "4C": {
                "name": "Meter Multi-reading",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Index",
                    "type": "int",
                    "start": 18,
                    "end": 21,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 30
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 14,
                    "end": 17,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 10,
                    "end": 13,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 90
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 6,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 2,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 150
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 22,
                    "end": 25,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "4D": {
                "name": "Meter Multi-reading",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Index",
                    "type": "int",
                    "start": 18,
                    "end": 21,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 60
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 14,
                    "end": 17,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 120
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 10,
                    "end": 13,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 180
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 6,
                    "end": 9,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 240
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 2,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 300
                }, {
                    "name": "Index",
                    "type": "int",
                    "start": 22,
                    "end": 25,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            },
            "5A": {
                "name": "TEMPERATURE_TM2D_S1_HIG_S2_COV",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "5B": {
                "name": "TEMPERATURE_TM2D_S1_HIG_S2_HIG",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Digital Temperature 1",
                    "type": "sint",
                    "start": 2,
                    "end": 3,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }, {
                    "name": "Digital Temperature 2",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*0.0625)",
                    "unit": "°C",
                    "delay": 0
                }]
            }
        }
    },
    "5": {
        "name": "ACW-DI-2013",
        "primaryKey_start": null,
        "primaryKey_end": null,
        "frames": {
            "00": {
                "name": "Trame unique DI",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Low Battery",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "DI1",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "DI2",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Counter",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 64)/64",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Wirecut",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 128)/128",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Frame Counter Test",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "DI1",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "{x} & 1",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "DI2",
                    "type": "int",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur 1",
                    "type": "int",
                    "start": 4,
                    "end": 7,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur 2",
                    "type": "int",
                    "start": 8,
                    "end": 11,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }]
            }
        }
    },
    "15": {
        "name": "ACW-TMi-2012",
        "primaryKey_start": null,
        "primaryKey_end": null,
        "frames": {
            "00": {
                "name": "Trame unique TMi",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Measurement",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Alert Treshold Low",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Alert Treshold High",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Low Battery",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "End Alert Treshold Low",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "End Alert Treshold High",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Frame Counter",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "sint",
                    "start": 3,
                    "end": 4,
                    "calcul": "{x}/128",
                    "unit": "°C",
                    "delay": 0
                }]
            }
        }
    },
    "21": {
        "name": "ACW-TMe-2012",
        "primaryKey_start": null,
        "primaryKey_end": null,
        "frames": {
            "00": {
                "name": "Trame unique TMe",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Measurement",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Alert Treshold Low",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 2)/2",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Alert Treshold High",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 4)/4",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Low Battery",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 8)/8",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "End Alert Treshold Low",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 16)/16",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "End Alert Treshold High",
                    "type": "boolean",
                    "start": 1,
                    "end": 1,
                    "calcul": "({x} & 32)/32",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Frame Counter",
                    "type": "int",
                    "start": 2,
                    "end": 2,
                    "calcul": "{x}",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 3,
                    "end": 4,
                    "calcul": "({x}-(2074*16))/(8*16)",
                    "unit": "°C",
                    "delay": 0
                }]
            }
        }
    },
    "27": {
        "name": "AST-LW8-TEMP",
        "primaryKey_start": 0,
        "primaryKey_end": 2,
        "frames": {
            "3201": {
                "name": "Trame alerte",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Mouvement",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "ILS",
                    "type": "boolean",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "3202": {
                "name": "Trame alerte",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Mouvement",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "ILS",
                    "type": "boolean",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "3208": {
                "name": "Trame alerte",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Mouvement",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "ILS",
                    "type": "boolean",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "3210": {
                "name": "Trame périodique",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Mouvement",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "ILS",
                    "type": "boolean",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 5,
                    "end": 6,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 4
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 2
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "01XX": {
                "name": "Keep alive",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Idle Supply Voltage",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }, {
                    "name": "Tx Supply Voltage",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }]
            }
        }
    },
    "28": {
        "name": "AST-LW8-VOLT",
        "primaryKey_start": 0,
        "primaryKey_end": 2,
        "frames": {
            "3202": {
                "name": "Trame de test",
                "type": "PERIODIC",
                "channels": [{
                    "name": "ILS",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Voltage",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*4.19)",
                    "unit": "mV",
                    "delay": 0
                }]
            },
            "3210": {
                "name": "Trame périodique",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "ILS",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Voltage",
                    "type": "sint",
                    "start": 4,
                    "end": 5,
                    "calcul": "({x}*4.19)",
                    "unit": "mV",
                    "delay": 60
                }, {
                    "name": "Voltage",
                    "type": "sint",
                    "start": 6,
                    "end": 7,
                    "calcul": "({x}*4.19)",
                    "unit": "mV",
                    "delay": 40
                }, {
                    "name": "Voltage",
                    "type": "sint",
                    "start": 8,
                    "end": 9,
                    "calcul": "({x}*4.19)",
                    "unit": "mV",
                    "delay": 20
                }, {
                    "name": "Voltage",
                    "type": "sint",
                    "start": 10,
                    "end": 11,
                    "calcul": "({x}*4.19)",
                    "unit": "mV",
                    "delay": 0
                }]
            },
            "01XX": {
                "name": "Keep alive",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Idle Supply Voltage",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }, {
                    "name": "Tx Supply Voltage",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }]
            }
        }
    },
    "29": {
        "name": "AST-LW8-TEMP-V2",
        "primaryKey_start": 0,
        "primaryKey_end": 2,
        "frames": {
            "3201": {
                "name": "Trame alerte",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Vibration",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Bouton",
                    "type": "boolean",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur",
                    "type": "boolean",
                    "start": 5,
                    "end": 6,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "3202": {
                "name": "Trame alerte",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Vibration",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Bouton",
                    "type": "boolean",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur",
                    "type": "boolean",
                    "start": 5,
                    "end": 6,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "3208": {
                "name": "Trame alerte",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Vibration",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Bouton",
                    "type": "boolean",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur",
                    "type": "boolean",
                    "start": 5,
                    "end": 6,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "3210": {
                "name": "Trame alerte",
                "type": "DATA_LOGGING",
                "channels": [{
                    "name": "Vibration",
                    "type": "boolean",
                    "start": 3,
                    "end": 3,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Bouton",
                    "type": "boolean",
                    "start": 4,
                    "end": 4,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Compteur",
                    "type": "boolean",
                    "start": 5,
                    "end": 6,
                    "calcul": "({x}&1)",
                    "unit": null,
                    "delay": 0
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 7,
                    "end": 8,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 30
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 9,
                    "end": 10,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 20
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 11,
                    "end": 12,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 10
                }, {
                    "name": "Temperature",
                    "type": "int",
                    "start": 13,
                    "end": 14,
                    "calcul": "(2103-{x})/10.9",
                    "unit": "°C",
                    "delay": 0
                }]
            },
            "01##": {
                "name": "Keep alive",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Idle Supply Voltage",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }, {
                    "name": "Tx Supply Voltage",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }]
            }
        }
    },
    "44": {
        "name": "ACW-DIK-LW",
        "primaryKey_start": 0,
        "primaryKey_end": 1,
        "frames": {
            "53": {
                "name": "Appuie Bouton",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Bouton",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "1",
                    "unit": null,
                    "delay": 0
                }]
            },
            "01": {
                "name": "Keep alive",
                "type": "PERIODIC",
                "channels": [{
                    "name": "Idle Supply Voltage",
                    "type": "int",
                    "start": 2,
                    "end": 3,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }, {
                    "name": "Tx Supply Voltage",
                    "type": "int",
                    "start": 4,
                    "end": 5,
                    "calcul": "{x}",
                    "unit": "mV",
                    "delay": 0
                }]
            }
        }
    }
};

exports.framesCollection = framesCollection;