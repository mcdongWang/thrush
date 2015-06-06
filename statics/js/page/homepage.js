fml.define('page/homepage', [], function(require, exports) {

    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('zf'));

    $.get('/homepage/zf', function(data){
        console.log(data)
        var option = {
            tooltip: {
                show: true
            },
            legend: {
                data:['脆弱口令', '穷举探测', '缓冲溢出', '安全扫描', '木马后门']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['201501', '201502', '201503', '201504']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    "name":"脆弱口令",
                    "type":"bar",
                    "data":[14,24,35,23]
                },
                {
                    "name":"穷举探测",
                    "type":"bar",
                    "data":[14,24,35,23]
                },
                {
                    "name":"缓冲溢出",
                    "type":"bar",
                    "data":[14,24,35,23]
                },
                {
                    "name":"安全扫描",
                    "type":"bar",
                    "data":[14,24,35,23]
                },
                {
                    "name":"木马后门",
                    "type":"bar",
                    "data":[14,24,35,23]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    })




    $('.con').eq(0).show();
    $('.tab').on('click', function(){
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.con').hide().eq($(this).data('index')).show()
        var inter
        // clearInterval(inter)
        if($(this).data('index') == 2){
            getContent()
            // var inter = setInterval(getContent,3000)
        }else if($(this).data('index') == 3){
            getContent1()
            // var inter = setInterval(getContent1,3000)
        }
    })

    function getContent(){
        $.post('/homepage/get', function(data){
            console.log(data)
            var str = ""
        for(var i in data.date[0]){
                str+= '<tr><td>'+data.date[0][i].sip+'</td>'+'<td>'+data.date[0][i].dip+'</td>'+'<td>'+data.date[0][i].alert+'</td>'+'<td>'+data.date[0][i].sip_alert_pro+'</td>'+'<td>'+data.date[0][i].sip_dip_alert_pro+'</td>'+'<td>'+data.date[0][i].all_alert_pro+'</td></tr>'

            }
            $('.table1').prepend(str)
        })
    }

    function getContent1(){
        $.post('/homepage/get', function(data){
            console.log(data)
            var str = ""
            for(var i in data.date[1]){
                str+= '<tr><td>'+data.date[1][i].time_window+'</td>'+'<td>'+data.date[1][i].alert_A+'</td>'+'<td>'+data.date[1][i].alert_B+'</td>'+'<td>'+data.date[1][i].alert_fre+'</td>'+'<td>'+data.date[1][i].all_dip_pro+'</td></tr>'
            }
            $('.table2').prepend(str)
        })
    }
})

