module.exports = function(RED) {
    function AgateUserNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.password = config.password;
        
        var node = this;        
    }
    RED.nodes.registerType("atim-agate-user",AgateUserNode);
}