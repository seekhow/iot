var chartOne = echarts.init(document.getElementById('chartOne'));
    var optionOne = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['市场规模','增长率']
        },
        xAxis: [
            {
                type: 'category',
                data: ['2013年','2014年','2015年','2016年','2017年','2018年'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '亿元',
                min: 0,
                max: 16000,
                interval: 2000,
                axisLabel: {
                    formatter: '{value} '
                }
            },
            {
                type: 'value',
                name: '百分比',
                min: 0,
                max: 40.0,
                interval: 5.0,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name:'市场规模',
                type:'bar',
                data:[4896,6000,7500,9300,11500,13500]
            },
            {
                name:'增长率',
                type:'line',
                yAxisIndex: 1,
                data:[34.1,22.6,29.3,24.0,23.7,17.4]
            }
            ]
    };
chartOne.setOption(optionOne);

var chartTwo = echarts.init(document.getElementById('chartTwo'));
    var optionTwo={
         tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data:[
                {value:235, name:'支撑层'},
                {value:274, name:'应用层'},
                {value:310, name:'感知层'},
                {value:335, name:'平台层'},
                {value:400, name:'传输层'}
            ]
        }
    ]
    };
chartTwo.setOption(optionTwo);