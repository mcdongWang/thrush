var dbThis = function(cbk){
    var _self = this;
    this.stack = {};
    this.count = 0;

    db.dbFind(this, 'find', {
        'table' : 'alert_column',
        'list' : {
            time : {type: 'text'}
            , alert_style : {type: 'text'}
            , count : {type: 'text'}
        },
        'findList' : {}
    });

    db.dbResult(this, function(_self){
        return cbk(null ,_self.stack.find);
    });
}
exports.dbThis = dbThis;
