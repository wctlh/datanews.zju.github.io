var bmap, mychart , data = [];
var govdata = [[5918298,4283404,21899782],
	[7390234,4767246,25104545],
	[7246245,4550393,24569249],
	[6832345,4206299,24376883],
	[8629131,5051505,27447040]
];
var nongovdata = [
	[3412809,3024294,11035255],
	[3120434,3249111,12098926],
	[3520770,3243599,13368596],
	[4000191,3773817,14181086],
	[3701411,3433457,14836059]
]
var totaldata = [
	[{name: '中部', value:9331107}
	,{name: '西部', value:7307698}
	,{name: '东部', value:32935037}
	],
	[{name: '中部', value:10510668}
	,{name: '西部', value:8016357}
	,{name: '东部', value:37203471}
	],
	[{name: '中部', value:10767015}
	,{name: '西部', value:7793992}
	,{name: '东部', value:37937845}
	],
	[{name: '中部', value:10832536}
	,{name: '西部', value:7980116}
	,{name: '东部', value:38557969}
	],
	[{name: '中部', value:12330542}
	,{name: '西部', value:8484962}
	,{name: '东部', value:42283099}
	]
]
$(document).ready(function(){
	mychart = echarts.init(document.getElementById("mapDiv"),'dark');
	
	option = {
	 title: {
        text: '985高校东中西部分布',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['政府科研经费','非政府科研经费']
    },
    visualMap: {
        min: 0,
        max: 10,
        left: 'left',
        top: 'bottom',
        text: ['最高','最低'],           // �ı���Ĭ��Ϊ��ֵ�ı�
         inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
  
    series: [{
        type: 'bar',
        data: govdata[0],
        coordinateSystem: 'polar',
        radius : '20%',
        center: ['85%', '50%'],
        name: '政府科研经费',
        stack: 'a',
    	itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        type: 'bar',
        data: govdata[0],
        coordinateSystem: 'polar',
        radius : '20%',
        center: ['85%', '50%'],
        name: '非政府科研经费',
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 3,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        name: '科研经费总和',
        type: 'pie',
        center: ['85%', '50%'],
        radius: ['40%', '45%'],
        avoidLabelOverlap: false,
        data: totaldata[0],
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        label: {
            normal: {
                show: true,
                position: 'outside',
                formatter: '{b} : {c} ({d}%)'

            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                trigger: 'item',
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: tooltipFormatter,

            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        legend: {
            show: true,
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: ['东部', '中部', '西部']
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'normal'
                }
            }
        }
    }],
    
    angleAxis: {
        type: 'category',
        data: ['中部','西部','东部'],
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    	center: ['85%','50%'],
    	radius: '40%',
    },
	}
	mychart.setOption(option);
})

//提示框体
function tooltipFormatter(params) {
    var valuesFormatter = [];
    if (params.componentSubType == 'pie') {
        valuesFormatter
            .push('<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '本日销量' +
                '<br>' +
                '</div>' +
                '<span style="color:' +
                params.color +
                '">' + params.name + '</span>: ' + params.value);
    } else {
        valuesFormatter
            .push('<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                params.seriesName +
                '</div>' +
                '<span style="color:' +
                params.color +
                '">' +
                params.name +
                '</span>: ' +
                params.value + '<br>');
    }

    return valuesFormatter;
}