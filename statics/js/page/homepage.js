fml.define('page/homepage', [], function(require, exports) {

    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('zf'));

            var option = {
            tooltip: {
                show: true
            },
            legend: {
                data:['销量']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    "name":"销量",
                    "type":"bar",
                    "data":[5, 20, 40, 10, 10, 20]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);

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

