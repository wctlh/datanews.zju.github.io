var bmap, mychart , data = [];
var colors = [['#D2E9FF', '#0072E3']];
var value = [[
{name: '北京', value:8},
{name: '天津', value:2},
{name: '河北', value:0},
{name: '辽宁', value:2},
{name: '上海', value:4},
{name: '江苏', value:2},
{name: '浙江', value:1},
{name: '福建', value:1},
{name: '山东', value:2},
{name: '广东', value:2},
{name: '海南', value:0},
{name: '广西', value:0},
{name: '台湾', value:0}
],[
{name: '黑龙江', value:1},
{name: '吉林', value:1},
{name: '山西', value:0},
{name: '安徽', value:1},
{name: '江西', value:0},
{name: '河南', value:0},
{name: '湖北', value:2},
{name: '湖南', value:2},
{name: '内蒙古', value:0}
],[
{name: '四川', value:2},
{name: '重庆', value:1},
{name: '贵州', value:0},
{name: '云南', value:0},
{name: '西藏', value:0},
{name: '陕西', value:3},
{name: '甘肃', value:1},
{name: '青海', value:0},
{name: '宁夏', value:0},
{name: '新疆', value:0}
]
];

//$(document).ready(function(){
//	mychart = echarts.init(document.getElementById("mapDiv1"),'vintage');
//	
//	option = {
//	 title: {
//        text: '985高校东中西部分布',
//        subtext: '数据来源教育部科技司',
//        left: 'center'
//    },
//    grid:[
//    	{width:'100%',height:'100%'},
//    	{width:'100%',height:'100%'},
//    ],
//    tooltip: {
//        trigger: 'item'
//    },
//    legend: {
//    	show:true,
//        orient: 'vertical',
//        left: 'left',
//        data:['东部','中部','西部']
//    },
//    visualMap:[{
//        min: 0,
//        max: 10,
//        left: 'left',
//        
//        top: 'bottom',
//        text: ['最高','最低'],           // �ı���Ĭ��Ϊ��ֵ�ı�
//         inRange: {
//        	 color: colors[0],
//            },
//        calculable: true
//    },
//   {
//    	min: 0,
//    	max: 10,
//    	left: 'left',
//    	seriesIndex:3,
//    	top: 'bottom',
//    	text: ['最高','最低'],           // �ı���Ĭ��Ϊ��ֵ�ı�
//    	inRange: {
//    		
//    		 color: ['#FFD2D2','#FF2D2D'],
//    	},
//    	calculable: true
//    }],
//    toolbox: {
//        show: true,
//        orient: 'vertical',
//        left: 'right',
//        top: 'center',
//        feature: {
//            dataView: {readOnly: false},
//            restore: {},
//            saveAsImage: {}
//        }
//    },
//    series: [
//        {
//            name: '东部',
//            type: 'map',
//            mapType: 'china',
//            roam: false,
//            visualMapIndex:0,
//            label: {
//                normal: {
//                    show: true
//                },
//                emphasis: {
//                    show: true
//                }
//            },
//            data:value[0]
//		},
//		{
//            name: '中部',
//            type: 'map',
//            mapType: 'china',
//            visualMapIndex:0,
//            roam: false,
//            label: {
//                normal: {
//                    show: true
//                },
//                emphasis: {
//                    show: true
//                }
//            },
//            data:value[1]
//		},
//		{
//            name: '西部',
//            type: 'map',
//            mapType: 'china',
//            roam: false,
//            visualMapIndex:0,
//            label: {
//                normal: {
//                    show: true
//                },
//                emphasis: {
//                    show: true
//                }
//            },
//            data:value[2]
//		},
//		{
//        type:'pie',
//        radius : [0,50],
//        center: ['85%', '50%'],
//        visualMapIndex:1,
//        data:[
//        	{value:24, name:'东部'},
//        	{value:7,  name:'中部'},
//       		{value:7,  name:'西部'}
//       		],
//        	 roseType: 'radius',
//            label: {
//                normal: {
//                	show:true,
//                    textStyle: {
//                        color: 'rgba(255, 255, 255, 0.3)'
//                    }
//                }
//            },
//            labelLine: {
//                normal: {
//                    lineStyle: {
//                        color: 'rgba(255, 255, 255, 0.3)'
//                    },
//                    smooth: 0.2,
//                    length: 10,
//                    length2: 20
//                }
//            },
//            itemStyle: {
//                normal: {
//                    color: '#0072E3',
//                    shadowBlur: 200,
//                    shadowColor: 'rgba(0, 0, 0, 0.5)'
//                }
//            },
//
//            animationType: 'scale',
//            animationEasing: 'elasticOut',
//            animationDelay: function (idx) {
//                return Math.random() * 200;
//            },
//            
//           }
//		],
//    
//	}
//	mychart.setOption(option);
//})