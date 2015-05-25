var dbThis = function(cbk){
    var _self = this;
    this.stack = {};
    this.count = 0;

    db.dbFind(this, 'find', {
        'table' : 'alert_FI',
        'list' : {
            sip : {type: 'text'}
            , dip : {type: 'text'}
            , alert : {type: 'text'}
            , sip_alert_pro : {type: 'text'}
            , sip_dip_alert_pro : {type: 'text'}
            , all_alert_pro : {type: 'text'}
        },
        'findList' : {}
    });

    db.dbResult(this, function(_self){
        return cbk(null ,_self.stack.find);
    });
}
exports.dbThis = dbThis;