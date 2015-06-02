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
        'findList' : {},
        'limit' : 10
    });

    db.dbFind(this, 'find1', {
        'table' : 'Time_alert_FI',
        'list' : {
            time_window : {type: 'text'}
            , alert_A : {type: 'text'}
            , alert_B : {type: 'text'}
            , alert_fre : {type: 'text'}
            , all_dip_pro : {type: 'text'}
            , flag : {type: 'text'}
        },
        'findList' : {},
        'limit' : 10
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
        'findList' : {},
        'updateList' : {'flag': '1'},
        'limit' : 10
    });

    db.dbResult(this, function(_self){
        return cbk(null ,[_self.stack.find, _self.stack.find1]);
    });
}
exports.dbThis = dbThis;
