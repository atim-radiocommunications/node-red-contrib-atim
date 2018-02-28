module.exports = function(RED) {
    function CustomFramesCollectionNode(n) {
        RED.nodes.createNode(this,n);
        this.name = n.name;
        this.primaryKey_start = n.primaryKey_start;
        this.primaryKey_end = n.primaryKey_end;
        this.payload = n.payload;
        
        var node = this;
    }
    RED.nodes.registerType("atim-custom-frames-collection",CustomFramesCollectionNode);
}