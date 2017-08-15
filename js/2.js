var bmap, mychart , data = [];
var value1 = [[
		{name: '吉林', value:14},
		{name: '湖南', value:20},
		{name: '湖北', value:30},
		{name: '黑龙江', value:18},
		{name: '安徽', value:11},
		{name: '重庆', value:7},
		{name: '四川', value:25},
		{name: '陕西', value:37},
		{name: '甘肃', value:3},
		{name: '浙江', value:32},
		{name: '天津', value:21},
		{name: '上海', value:71},
		{name: '山东', value:15},
		{name: '辽宁', value:21},
		{name: '江苏', value:26},
		{name: '广东', value:25},
		{name: '福建', value:6},
		{name: '北京', value:112},
		{name: '新疆', value:0},
		{name: '西藏', value:0},
		{name: '青海', value:0},
		{name: '宁夏', value:0},
		{name: '内蒙古', value:0},
		{name: '山西', value:0},
		{name: '河南', value:0},
		{name: '河北', value:0},
		{name: '江西', value:0},
		{name: '贵州', value:0},
		{name: '云南', value:0},
		{name: '广西', value:0},
		{name: '海南', value:0},
		{name: '台湾', value:0}
		],[
		{name: '吉林', value:15},
		{name: '湖南', value:19},
		{name: '湖北', value:36},
		{name: '黑龙江', value:22},
		{name: '安徽', value:15},
		{name: '重庆', value:8},
		{name: '四川', value:30},
		{name: '陕西', value:39},
		{name: '甘肃', value:3},
		{name: '浙江', value:36},
		{name: '天津', value:25},
		{name: '上海', value:83},
		{name: '山东', value:16},
		{name: '辽宁', value:26},
		{name: '江苏', value:27},
		{name: '广东', value:29},
		{name: '福建', value:6},
		{name: '北京', value:124},
		{name: '新疆', value:0},
		{name: '西藏', value:0},
		{name: '青海', value:0},
		{name: '宁夏', value:0},
		{name: '内蒙古', value:0},
		{name: '山西', value:0},
		{name: '河南', value:0},
		{name: '河北', value:0},
		{name: '江西', value:0},
		{name: '贵州', value:0},
		{name: '云南', value:0},
		{name: '广西', value:0},
		{name: '海南', value:0},
		{name: '台湾', value:0}
		],[
		{name: '吉林', value:13},
		{name: '湖南', value:19},
		{name: '湖北', value:34},
		{name: '黑龙江', value:25},
		{name: '安徽', value:16},
		{name: '重庆', value:7},
		{name: '四川', value:32},
		{name: '陕西', value:35},
		{name: '甘肃', value:3},
		{name: '浙江', value:34},
		{name: '天津', value:25},
		{name: '上海', value:84},
		{name: '山东', value:18},
		{name: '辽宁', value:29},
		{name: '江苏', value:28},
		{name: '广东', value:27},
		{name: '福建', value:7},
		{name: '北京', value:127},
		{name: '新疆', value:0},
		{name: '西藏', value:0},
		{name: '青海', value:0},
		{name: '宁夏', value:0},
		{name: '内蒙古', value:0},
		{name: '山西', value:0},
		{name: '河南', value:0},
		{name: '河北', value:0},
		{name: '江西', value:0},
		{name: '贵州', value:0},
		{name: '云南', value:0},
		{name: '广西', value:0},
		{name: '海南', value:0},
		{name: '台湾', value:0}
		],[
		{name: '吉林', value:15},
		{name: '湖南', value:19},
		{name: '湖北', value:34},
		{name: '黑龙江', value:24},
		{name: '安徽', value:16},
		{name: '重庆', value:7},
		{name: '四川', value:32},
		{name: '陕西', value:37},
		{name: '甘肃', value:3},
		{name: '浙江', value:37},
		{name: '天津', value:29},
		{name: '上海', value:78},
		{name: '山东', value:18},
		{name: '辽宁', value:28},
		{name: '江苏', value:30},
		{name: '广东', value:24},
		{name: '福建', value:8},
		{name: '北京', value:131},
		{name: '新疆', value:0},
		{name: '西藏', value:0},
		{name: '青海', value:0},
		{name: '宁夏', value:0},
		{name: '内蒙古', value:0},
		{name: '山西', value:0},
		{name: '河南', value:0},
		{name: '河北', value:0},
		{name: '江西', value:0},
		{name: '贵州', value:0},
		{name: '云南', value:0},
		{name: '广西', value:0},
		{name: '海南', value:0},
		{name: '台湾', value:0}
		],[
		{name: '吉林', value:15},
		{name: '湖南', value:20},
		{name: '湖北', value:39},
		{name: '黑龙江', value:26},
		{name: '安徽', value:23},
		{name: '重庆', value:8},
		{name: '四川', value:34},
		{name: '陕西', value:40},
		{name: '甘肃', value:3},
		{name: '浙江', value:41},
		{name: '天津', value:30},
		{name: '上海', value:78},
		{name: '山东', value:20},
		{name: '辽宁', value:29},
		{name: '江苏', value:33},
		{name: '广东', value:33},
		{name: '福建', value:10},
		{name: '北京', value:149},
		{name: '新疆', value:0},
		{name: '西藏', value:0},
		{name: '青海', value:0},
		{name: '宁夏', value:0},
		{name: '内蒙古', value:0},
		{name: '山西', value:0},
		{name: '河南', value:0},
		{name: '河北', value:0},
		{name: '江西', value:0},
		{name: '贵州', value:0},
		{name: '云南', value:0},
		{name: '广西', value:0},
		{name: '海南', value:0},
		{name: '台湾', value:0}
		]
]
var govdata = [[59.18298,42.83404,218.99782],
	[73.90234,47.67246,251.04545],
	[72.46245,45.50393,245.69249],
	[68.32345,42.06299,243.76883],
	[86.29131,50.51505,274.47040]
];
var nongovdata = [
	[34.12809,30.24294,110.35255],
	[31.20434,32.49111,120.98926],
	[35.20770,32.43599,133.68596],
	[40.00191,37.73817,141.81086],
	[37.01411,34.33457,148.36059]
];
var totaldata = [
	[{name: '中部', value:93}
	,{name: '西部', value:73}
	,{name: '东部', value:329}
	],
	[{name: '中部', value:105}
	,{name: '西部', value:807}
	,{name: '东部', value:372}
	],
	[{name: '中部', value:108}
	,{name: '西部', value:78}
	,{name: '东部', value:379}
	],
	[{name: '中部', value:108}
	,{name: '西部', value:80}
	,{name: '东部', value:386}
	],
	[{name: '中部', value:123}
	,{name: '西部', value:85}
	,{name: '东部', value:423}
	]
];
function tooltipmapDiv2(params){
	var valuesFormatter = [];
	
	if(params.value!= 0){
        valuesFormatter
            .push('<div style="width:40%;border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '985高校科研经费情况' +
                '<br>' +
                '</div>' +'<div style="width:40%;">'+
                '<span style="color:#3C3C3C' +
                params.color +
                '">' + params.name + '</span>: ' +'拥有 '+ params.value +'亿元科研经费'+ '</div>');}
	else {
		valuesFormatter
        .push(params.name + '</span>: ' + '该省无985院校科研经费');
	}
        return valuesFormatter;
}
function tooltipmapDiv3(params){
	var valuesFormatter = [];
	
	
		valuesFormatter
		.push( params.name + params.value);
	
	return valuesFormatter;
}
var areacolors = [['#C4E1FF']]
var allSeries2 = new Array();
allSeries2=[ {
    name: '2012',
    type: 'map',
    mapType: 'china',
    left:'16%',
    top:'17%',
    roam: false,
    tooltip: {
   	 trigger: 'item',
	     	formatter: tooltipmapDiv2
   },
    label: {
        normal: {
            show: true,
            itemstyle:{
            color:'#FFECEC'
            }
        },
        emphasis: {
            show: true
        }
    },
    itemStyle: {
    	normal: {
    		areaColor: areacolors[0],
    		borderColor: '#ECF5FF'
    	},
        emphasis: {
           areaColor: areacolors[0]
        }
    },
    data:value1[0]
},{
    type: 'bar',
    data: govdata[0],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '政府经费[亿元]',
    stack: 'a',
    itemStyle: {
        normal: {
            borderWidth: 2,
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
    data: nongovdata[0],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '非政府经费[亿元]',
    stack: 'a',
    itemStyle: {
        normal: {
            borderWidth: 2,
            borderColor: '#ffffff',
        },
        emphasis: {
            borderWidth: 0,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
},  {
    name: '科研经费总和',
    type: 'pie',
   center: ['84%', '34%'],
    radius: ['28%', '32%'],
    avoidLabelOverlap: false,
    data: totaldata[0],
    clockwise:false,
    tooltip: {
      	 trigger: 'item',
   	     	formatter: tooltipmapDiv2
      },
    inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    label: {
        normal: {
            show: true,
            position: 'outside',
            formatter: '  {b}  \n {c} 亿'
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '15',
                fontWeight: 'normal'
            }
        },
    },
    labelLine: {
        normal: {
            smooth: 0.2,
            length: 4,
            length2: 1,
            show:false
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
},
{
    name: '2013',
    type: 'map',
    mapType: 'china',
    roam: true,
    tooltip: {
   	 trigger: 'item',
	     	formatter: tooltipmapDiv2
   },
    label: {
        normal: {
            show: true,
            itemstyle:{
            color:'white'
            }
        },
        emphasis: {
            show: true
        }
    },
    
    data:value1[1]
},
{
    type: 'bar',
    data: govdata[1],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '政府经费[亿元]',
    stack: 'a'
}, {
    type: 'bar',
    data: nongovdata[1],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '非政府经费[亿元]',
    stack: 'a',
	itemStyle: {
        normal: {
            borderWidth: 2,
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
    name: '科研经费总和',
    type: 'pie',
   center: ['84%', '34%'],
    radius: ['28%', '32%'],
    avoidLabelOverlap: false,
    data: totaldata[1],
    clockwise:false,
    tooltip: {
      	 trigger: 'item',
   	     	formatter: tooltipmapDiv2
      },
    inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    label: {
        normal: {
            show: true,
            position: 'outside',
            formatter: '  {b}  \n {c} 亿'
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '15',
                fontWeight: 'normal'
            }
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
},
{
    name: '2014',
    type: 'map',
    mapType: 'china',
    roam: false,
    
    tooltip: {
   	 trigger: 'item',
	     	formatter: tooltipmapDiv2
   },
    label: {
        normal: {
            show: true,
            itemstyle:{
            color:'white'
            }
        },

        emphasis: {
            show: true
        }
    },
    data:value1[2]
},
{
    type: 'bar',
    data: govdata[2],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '政府经费[亿元]',
    stack: 'a',
	itemStyle: {
        normal: {
            borderWidth: 2,
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
    data: nongovdata[2],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '非政府经费[亿元]',
    stack: 'a',
	itemStyle: {
        normal: {
            borderWidth: 2,
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
    name: '科研经费总和',
    type: 'pie',
   center: ['84%', '34%'],
    radius: ['28%', '32%'],
    avoidLabelOverlap: false,
    data: totaldata[2],
    clockwise:false,
    tooltip: {
      	 trigger: 'item',
   	     	formatter: tooltipmapDiv2
      },
    inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    label: {
        normal: {
            show: true,
            position: 'outside',
            formatter: '  {b}  \n {c} 亿'
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '15',
                fontWeight: 'normal'
            }
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
},
{
    name: '2015',
    type: 'map',
    mapType: 'china',
    roam: false,
    tooltip: {
   	 trigger: 'item',
	     	formatter: tooltipmapDiv2
   },
    label: {
        normal: {
            show: true,
            itemstyle:{
            color:'grey'
            }
        },

        emphasis: {
            show: true
        }
    },
    data:value1[3]
},{
    type: 'bar',
    data: govdata[3],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '政府经费[亿元]',
    stack: 'a',
	itemStyle: {
        normal: {
            borderWidth: 2,
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
    data: nongovdata[3],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '非政府经费[亿元]',
    stack: 'a',
	itemStyle: {
        normal: {
            borderWidth: 2,
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
    name: '科研经费总和',
    type: 'pie',
   center: ['84%', '34%'],
    radius: ['28%', '32%'],
    avoidLabelOverlap: false,
    data: totaldata[3],
    clockwise:false,
    tooltip: {
      	 trigger: 'item',
   	     	formatter: tooltipmapDiv2
      },
    inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    label: {
        normal: {
            show: true,
            position: 'outside',
            formatter: '  {b}  \n {c} 亿'
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '15',
                fontWeight: 'normal'
            }
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
},
{
    name: '2016',
    type: 'map',
    mapType: 'china',
    roam: false,
    tooltip: {
   	 trigger: 'item',
	     	formatter: tooltipmapDiv2
   },
    label: {
        normal: {
            show: true,
            itemstyle:{
            color:'white'
            }
        },

        emphasis: {
            show: true
        }
    },
    data:value1[4]
},{
    type: 'bar',
    data: govdata[4],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '政府经费[亿元]',
    stack: 'a',
	itemStyle: {
        normal: {
            borderWidth: 2,
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
    data: nongovdata[4],
    coordinateSystem: 'polar',
    radius : '20%',
   center: ['84%', '34%'],
    name: '非政府经费[亿元]',
    stack: 'a',
    itemStyle: {
        normal: {
            borderWidth: 2,
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
    name: '科研经费总和',
    type: 'pie',
   center: ['84%', '34%'],
    radius: ['28%', '32%'],
    avoidLabelOverlap: false,
    data: totaldata[4],
    clockwise:false,
    tooltip: {
      	 trigger: 'item',
   	     	formatter: tooltipmapDiv2
      },
    inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    label: {
        normal: {
            show: true,
            position: 'outside',
            formatter: '  {b}  \n {c} 亿'
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '15',
                fontWeight: 'normal'
            }
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
        data: ['中部','西部','东部']
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
}]
//$(document).ready(function(){
//	mychart = echarts.init(document.getElementById("mapDiv2"),'vintage');
//	 
//	 
//	option = {
//			baseOption: {
//				 timeline: {
//			            // y: 0,
//			            axisType: 'category',
//			            // realtime: false,
//			            // loop: false,
//			            autoPlay: true,
//			            // currentIndex: 2,
//			            playInterval: 3000,
//			            // controlStyle: {
//			            //     position: 'left'
//			            // },
//			            data: [
//			                '2012',
//			                {
//			                    value: '2013',
//			                    tooltip: {
//			                        formatter: '{b}年 “十二五”开局之年'
//			                    },
//			                    symbol: 'diamond',
//			                    symbolSize: 16
//			                } ,'2014','2015', {
//			                    value: '2016',
//			                    tooltip: {
//			                        formatter: '{b}年 提出建设“双一流”发展战略'
//			                    },
//			                    symbol: 'diamond',
//			                    symbolSize: 16
//			                } 
//			            ],
//			            label: {
//			                formatter : function(s) {
//			                    return (new Date(s)).getFullYear();
//			                }
//			            }
//			        },
//			        title: {
//			            text: '985高校科研经费东中西部各省总体概况',
//			            subtext: '数据来源教育部科技司',
//			            left: 'center'
//			        },
//			        tooltip: {
//			        },
//			        angleAxis: {
//			            type: 'category',
//			            data: ['中部','西部','东部'],
//			            z: 5,
//			            
//			            clockwise: false
//			        },
//			        radiusAxis: {
//			        },
//			        polar: {
//			        	center: ['85%','50%'],
//			        	radius: '25%',
//			        },
//			        legend: {
//			           show: true,
//			            data:['政府经费[亿元]','非政府经费[亿元]'],	
//			            left: 'right'
//			        },
//			        geo: {
//			            map: 'china',
//			            label: {
//			                emphasis: {
//			                    show: false
//			                }
//			            },
//			            itemStyle: {
//			                normal: {
//			                    areaColor: '#323c48',
//			                    borderColor: '#111'
//			                },
//			                emphasis: {
//			                    areaColor: '#2a333d'
//			                }
//			            }
//			        },
//			        visualMap: {
//			            min: 0,
//			            max: 15000000,
//			            left: 'left',
//			            top: 'bottom',
//			            text: ['最高','最低'],           // �ı���Ĭ��Ϊ��ֵ�ı�
//			            inRange: {
//			            	color: ['#50a3ba', '#eac736', '#d94e5d']
//			                
//			            },
//			            calculable: true
//			        },series: allSeries2.slice(0,2)
//			},
//			options: []
//	};
//	for(var n = 0; n<5 ;n++){
//		option.options.push({
//			series: allSeries2.slice(4*n,4*n+4)
//		})
//	}
//	mychart.setOption(option);
//	
//	
//});
