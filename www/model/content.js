var dbThis = function(cbk){
    var _self = this;
    this.stack = {};
    this.count = 0;

    db.dbFind(this, 'find', {
        'table' : 'a',
        'list' : {
            time_window : {type: 'text'}
            , alert_A : {type: 'text'}
            , alert_B : {type: 'text'}
            , alert_fre : {type: 'text'}
            , all_dip_pro : {type: 'text'}
        },
        'findList' : {}
    });

    db.dbResult(this, function(_self){
        return cbk(null ,_self.stack.find);
    });
}
exports.dbThis = dbThis;