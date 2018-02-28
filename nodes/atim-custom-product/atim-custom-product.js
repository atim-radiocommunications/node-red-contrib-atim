module.exports = function(RED) {
    function CustomProductNode(n) {
        RED.nodes.createNode(this,n);
        this.reference = n.reference;
        this.name = n.name;
        this.revision = n.revision;        
        this.collection = RED.nodes.getNode(n.collection);
        
        
        var node = this;        
    }
    RED.nodes.registerType("atim-custom-product",CustomProductNode);
}