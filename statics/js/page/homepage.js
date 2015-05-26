fml.define('page/homepage', ['jquery'], function(require, exports) {
	$('.con').eq(0).show();
	$('.tab').on('click', function(){
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.con').hide().eq($(this).data('index')).show()
	})
	function getContent(){
        $.post('/homepage/get', function(data){
            var str = ""
            for(var i in data.date){
                str+= '<tr><td>'+data.date[i].sip+'</td>'+'<td>'+data.date[i].dip+'</td>'+'<td>'+data.date[i].alert+'</td>'+'<td>'+data.date[i].sip_alert_pro+'</td>'+'<td>'+data.date[i].sip_dip_alert_pro+'</td>'+'<td>'+data.date[i].all_alert_pro+'</td></tr>'
                
            }
            $('table').prepend(str)
        })
    } 
    setInterval(getContent,3000)

    function getContent(){
        $.post('/homepage/post', function(data){
            var str = ""
            for(var i in data.date){
                str+= '<tr><td>'+data.date[i].time_window+'</td>'+'<td>'+data.date[i].alert_A+'</td>'+'<td>'+data.date[i].alert_B+'</td>'+'<td>'+data.date[i].alert_fre+'</td>'+'<td>'+data.date[i].all_dip_pro+'</td></tr>'
                
            }
            $('table').prepend(str)
        })
    } 
});