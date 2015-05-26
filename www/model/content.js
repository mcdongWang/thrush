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
            , flag : {type: 'text'}
        },
        'findList' : {'flag': '0'}
    });

    db.dbFind(this, 'find', {
        'table' : 'time',
        'list' : {
            time_window : {type: 'text'}
            , alert_A : {type: 'text'}
            , alert_B : {type: 'text'}
            , alert_fre : {type: 'text'}
            , all_dip_pro : {type: 'text'}
            , flag : {type: 'text'}
        },
        'findList' : {'flag': '0'}
    });

    db.dbUpdate(this, 'update', {
        'table' : 'alert_FI',
        'list' : {
             sip : {type: 'text'}
            , dip : {type: 'text'}
            , alert : {type: 'text'}
            , sip_alert_pro : {type: 'text'}
            , sip_dip_alert_pro : {type: 'text'}
            , all_alert_pro : {type: 'text'}
            , flag : {type: 'text'}
        },
        'findList' : {'flag': '0'},
        'updateList' : {'flag': '1'}
    });

    db.dbResult(this, function(_self){
        return cbk(null ,_self.stack.find);
    });
}
exports.dbThis = dbThis;