fml.define('page/hello', ['jquery'], function(require, exports) {
	$('.con').eq(0).show()
	$('.navList').on('click', function(){
		$('.con').hide().eq($(this).data('index')).show()
	})
    function getContent(){
        $.post('/hello/get', function(data){
            var str = ""
            for(var i in data.date){
                str+= '<tr><td>'+data.date[i].time_window+'</td>'+'<td>'+data.date[i].alert_A+'</td>'+'<td>'+data.date[i].alert_B+'</td>'+'<td>'+data.date[i].alert_fre+'</td>'+'<td>'+data.date[i].all_dip_pro+'</td></tr>'
            }
            $('table').append(str)
        })
    }
    getContent()

    $('button').on('click', function(){
        getContent()
    })
});