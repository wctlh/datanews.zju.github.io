var lineStyle = {
    normal: {
    	color:'#FFECEC',
        width: 2,
        opacity: 0.6
    }
};
var lineStyle1 = {
	    normal: {
	    	color:'#FFFFFF',
	        width: 2,
	        opacity: 0.8
	    }
	};
var dataSJ = [[[3347963,2458909,889054,19173,8,15264]],[[3382208,2390014,992194,18988,6,94339]],
	[[3449919,2620980,828939,18607,3,104871]],[[3109383,2540747,568636,18854,5,210489]],
	[[2792688,2114165,678523,20129,8,202595]]];

var dataXJ = [[[1523296,1139791,383505,6254,57,29835]],[[1150884,784066,366818,6295,56,35398]],
	[[1105585,718770,386815,5771,22,33712]],[[1286242,927495,358747,5093,21,32166]],
	[[1229240,893102,336138,6004,25,37268]]];
var allSeries5 = [
	{
        name: '上海交通大学',
        type: 'radar',
       
        lineStyle: lineStyle1,
        data: dataSJ[0],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#AA0000'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '西安交通大学',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataXJ[0],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#004B97'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '上海交通大学',
        type: 'radar',
        lineStyle: lineStyle1,
        data: dataSJ[1],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#AA0000'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '西安交通大学',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataXJ[1],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#004B97'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '上海交通大学',
        type: 'radar',
        lineStyle: lineStyle1,
        data: dataSJ[2],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#AA0000'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '西安交通大学',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataXJ[2],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#004B97'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '上海交通大学',
        type: 'radar',
        lineStyle: lineStyle1,
        data: dataSJ[3],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#AA0000'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '西安交通大学',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataXJ[3],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#004B97'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '上海交通大学',
        type: 'radar',
        lineStyle: lineStyle1,
        data: dataSJ[4],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#AA0000'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    },
    {
        name: '西安交通大学',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataXJ[4],
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#004B97'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.6
            }
        }
    }
]

//$(document).ready(function(){
//	mychart = echarts.init(document.getElementById("mapDiv5"),'vintage');
//	option = {
//			
//			baseOption:{
//				timeline: {
//		            // y: 0,
//		            axisType: 'category',
//		            // realtime: false,
//		            // loop: false,
//		            autoPlay: true,
//		            // currentIndex: 2,
//		            playInterval: 3000,
//		            // controlStyle: {
//		            //     position: 'left'
//		            // },
//		            data: [
//		                '2012',
//		                {
//		                    value: '2013',
//		                    tooltip: {
//		                        formatter: '{b}年 “十二五”开局之年'
//		                    },
//		                    symbol: 'diamond',
//		                    symbolSize: 16
//		                } ,'2014','2015', {
//		                    value: '2016',
//		                    tooltip: {
//		                        formatter: '{b}年 提出建设“双一流”发展战略'
//		                    },
//		                    symbol: 'diamond',
//		                    symbolSize: 16
//		                } 
//		            ],
//		            label: {
//		                formatter : function(s) {
//		                    return (new Date(s)).getFullYear();
//		                }
//		            }
//		        },
//		        title: {
//		            text: '985高校科研经费东中西部各省各高校平均情况',
//		            subtext: '数据来源教育部科技司',
//		            left: 'center'
//		        },
//		        tooltip: {
//		        	trigger: 'item'
//		        },       
//	    legend: {
//	        bottom: 5,
//	        data: ['上海交通大学', '西安交通大学'],
//	        itemGap: 20,
//	        textStyle: {
//	            //color: '#fff',
//	            fontSize: 14
//	        },
//	        right:'50px',
//	        top:'10px'
//	        //selectedMode: 'single'
//	    },
//	    radar: {
//	        indicator: [
//	            {name: '科研经费总量', max: 3500000},
//	            {name: '政府科研经费量', max: 2700000},
//	            {name: '非政府科研经费量', max: 1000000},
//	            {name: '学术论文数量', max: 21000},
//	            {name: '鉴定数', max: 60},
//	            {name: '当年实际收入', max: 220000}
//	           
//	        ],
//	        shape: 'diamond',
//	        splitNumber: 5,
//	        name: {
//	            textStyle: {
//	                color: 'rgb(238, 197, 102)'
//	            }
//	        },
//	        splitLine: {
//	            lineStyle: {
//	                color: [
//	                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
//	                    'rgba(238, 197, 102, 0.6)', 'rgba(238, 197, 102, 0.6)',
//	                    'rgba(238, 197, 102, 0.6)', 'rgba(238, 197, 102, 1)'
//	                ].reverse()
//	            }
//	        },
//	        splitArea: {
//	            show: true,
//	            lineStyle: {
//	                color: [
//	                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
//	                    
//	                ].reverse()
//	            },
//	        color: {
//	            type: 'radial',
//	            x: 0.5,
//	            y: 0.5,
//	            r: 0.5,
//	            colorStops: [{
//	                offset: 0, color: 'red' // color at 0% position
//	            }, {
//	                offset: 1, color: 'blue' // color at 100% position
//	            }],
//	            globalCoord: false // false by default
//	        }
//	        },
//	        axisLine: {
////	            lineStyle: {
////	                color: 'rgba(238, 197, 102, 0.5)'
////	            }
//	        }
//	    },
//	    series: allSeries5.slice(0,2)
//	    	},
//	    options: []
//	};
//
//	for(var n = 0; n<5 ;n++){
//		option.options.push({
//			series: allSeries5.slice(2*n,2*n+2)
//		})
//	}
//mychart.setOption(option);
//})