fml.define('page/homepage', [], function(require, exports) {
    // var echart = require(echart)
    // console.log(echart)
    // zf
    // 路径配置
    // debugger
    // require.config({
    //     paths: {
    //         echarts: 'http://echarts.baidu.com/build/dist'
    //     }
    // });

    // // 使用
    // require.require(
    //     [
    //         'echarts',
    //         'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    //     ],
    //     function(ec) {
    //         // 基于准备好的dom，初始化echarts图表
    //         var myChart = ec.init(document.getElementsByClass('zf'));

    //         var option = {
    //             title: {
    //                 text: '每月攻击量统计'
    //             },
    //             tooltip: {
    //                 trigger: 'axis'
    //             },
    //             legend: {
    //                 data: ['xxx', 'yyy']
    //             },
    //             toolbox: {
    //                 show: true,
    //                 feature: {
    //                     mark: {
    //                         show: true
    //                     },
    //                     dataView: {
    //                         show: true,
    //                         readOnly: false
    //                     },
    //                     magicType: {
    //                         show: true,
    //                         type: ['line', 'bar']
    //                     },
    //                     restore: {
    //                         show: true
    //                     },
    //                     saveAsImage: {
    //                         show: true
    //                     }
    //                 }
    //             },
    //             calculable: true,
    //             xAxis: [{
    //                 type: 'category',
    //                 data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    //             }],
    //             yAxis: [{
    //                 type: 'value'
    //             }],
    //             series: [{
    //                 name: 'xxx',
    //                 type: 'bar',
    //                 data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    //                 markPoint: {
    //                     data: [{
    //                         type: 'max',
    //                         name: '最大值'
    //                     }, {
    //                         type: 'min',
    //                         name: '最小值'
    //                     }]
    //                 },
    //                 markLine: {
    //                     data: [{
    //                         type: 'average',
    //                         name: '平均值'
    //                     }]
    //                 }
    //             }, {
    //                 name: 'yyy',
    //                 type: 'bar',
    //                 data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    //                 markPoint: {
    //                     data: [{
    //                         name: '年最高',
    //                         value: 182.2,
    //                         xAxis: 7,
    //                         yAxis: 183,
    //                         symbolSize: 18
    //                     }, {
    //                         name: '年最低',
    //                         value: 2.3,
    //                         xAxis: 11,
    //                         yAxis: 3
    //                     }]
    //                 },
    //                 markLine: {
    //                     data: [{
    //                         type: 'average',
    //                         name: '平均值'
    //                     }]
    //                 }
    //             }]
    //         };

    //         // 为echarts对象加载数据
    //         myChart.setOption(option);
    //     }
    // );

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

