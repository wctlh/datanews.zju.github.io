/**
 * Created by DELL on 2017/7/16.
 */
var bmap, myChart,data =[],preZoomLevel;//缩放开始时的缩放级别;
var styleJson = [{//地图样式配置
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
        "color": "#323c48"
    }
}, {
    "featureType": "building",
    "elementType": "geometry",
    "stylers": {
        "color": "#2b2b2b"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "lightness": -77,
        "saturation": -94
    }
}, {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
        "color": "#1b1b1b"
    }
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": {
        "color": "#404a59"
    }
}, {
    "featureType": "subway",
    "elementType": "geometry.stroke",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": {
        "visibility": "on",
        "color": "#313131"
    }
}, {
    'featureType': 'label',
    'elementType': 'labels.text.fill',
    'stylers': {
        "color": "#cccccc",
        "weight": "0.1",
        "lightness": -15,
        "saturation": -4
    }
}, {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "boundary",
    "elementType": "labels.text.stroke",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highway",
    "elementType": "all",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "boundary",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#8b8787",
        "visibility": "on"
    }
}];
var years = ['元代','清代'];
var value = [
    [{name:'浙江 347',coord:[120.09,30.14]},{name:'江西 290',coord:[115.52,28.41]},{name:'山东 176',coord:[117.01,36.38]},{name:'山西 166',coord: [112.34,37.52]},{name:'河北 140',coord: [114.28,38.02]},{name:'江苏 131',coord: [118.50,32.02]},{name:'河南 123',coord: [113.42,34.48]},{name:'安徽 95',coord: [117.18,31.51]},{name:'福建 95',coord: [119.18,26.05]},{name:'四川 56',coord: [104.05,30.39]},{name:'湖南 50',coord: [112.53,28.11]},{name:'陕西',coord: [108.54,34.16]},{name:'湖北 28',coord: [114.21,30.37]},{name:'广东 17',coord: [113.15,23.08]},{name:'北京 14',coord: [116.28,39.54]},{name:'上海 12',coord: [121.29,31.14]},{name:'甘肃 10',coord: [103.49,36.03]},{name:'新疆 7',coord: [87.36,43.48]},{name:'云南 7',coord: [102.41,25.04]},{name:'辽宁 6',coord: [123.24,41.50]},{name:'内蒙古 6',coord: [111.48,40.49]},{name:'广西 4',coord: [108.20,22.48]},{name:'西藏 3',coord: [91.10,29.40]},{name:'吉林 2',coord: [125.19,43.52]},{name:'海南 1',coord: [110.20,20.02]},{name:'天津 1',coord: [117.11,39.09]},{name:'台湾 0',coord: [121.31,25.03]}],
    [{name:'临安府222',coord: [102.82,23.62]},{name:'云南府218',coord: [102.71,25.05]},{name:'大理府171',coord: [100.16,25.70]},{name:'丽江府120',coord: [99.90,26.48]},{name:'曲靖府61',coord: [104.11,26.22]},{name:'楚雄府60',coord: [101.28,25.66]},{name:'永昌府52',coord: [99.17,25.11]},{name:'澄江府27',coord: [102.91,24.67]},{name:'蒙化厅22',coord: [100.31,25.23]},{name:'顺宁府22',coord: [99.91,24.59]},{name:'武定州18',coord: [101.90,25.62]},{name:'昭通府17',coord: [103.72,27.34]},{name:'元江府11',coord: [102.01,23.60]},{name:'广西州10',coord: [103.76,24.52]},{name:'永北厅10',coord: [100.75,26.69]},{name:'东川府4',coord: [103.29,26.42]},{name:'景东厅4',coord: [100.84,24.45]},{name:'开化府4',coord: [104.24,23.38]},{name:'普洱府3',coord: [101.22,22.61]},{name:'镇雄州1',coord: [104.86,27.42]}]
];
var zoomvalue = [5,7];
var centervalue = [[105.871518, 38.386845],[101.83629,25.45213]];
var titlevalue = ['全元文作者分布图','云南作家分布图'];

$(document).ready(function() {
    var currentSeries = new Array();

    //echart+baiduMap
    myChart = echarts.init(document.getElementById("mapDiv"));

    option = {
    
          baseOption: {     
    
            timeline: {//时序图时间轴绘制控制
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 10000,
                left: null,
                right: 30,
                top: 40,
                bottom: 40,
                width: 55,
                height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbol: 'none',
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    color: '#bbb',
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },
                data: years
            },

            backgroundColor: '#333',
            title: { //设置图表标题
                text: '全元文作者分布图', //主标题
                subtext: '', //副标题
                left: 'center',
                top: 'top',
                textStyle: {
                    color: '#fff'
                }
            },

            bmap: { //引入百度地图
                center: [105.871518, 38.386845],
                zoom: 5,
                roam: true,
                mapStyle: { //设置地图样式
                    styleJson: styleJson
                }
            },

            series: [{
                name: '中国',
                type: 'scatter',
                coordinateSystem:'bmap',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },

                markPoint: {
                    symbol: 'pin',
                    symbolSize: 30,
                    label: {
                        normal: {
                            show: true,
                            formatter: function(d) {
                                return d.name
                            }
                        }
                    },
                    effect:{
                        show: true,
                        showBlur: 10,
                        color:'rgba(255, 255, 255, 0.5)'
                    }
                }
            }]
            //animationDurationUpdate: 1000,
            //animationEasingUpdate: 'quinticInOut'
        },
        options: []
    };
    for (var n = 0; n < years.length; n++) {//设置时间变换后的option内容
        option.options.push({
            title: {
                text: titlevalue[n],
                subtext: years[n]
            },
            bmap:{
                center :centervalue[n],
                zoom : zoomvalue[n]
            },
            series: {
                markPoint: {
                    data: value[n]
                }
            }
        });
        console.log(data[n + 1])
    }
    myChart.setOption(option);

    bmap = myChart.getModel().getComponent('bmap').getBMap();
    //添加地图类型控件
    bmap.addControl(new BMap.MapTypeControl());
    //添加平移缩放控件
    bmap.addControl(new BMap.NavigationControl());

    bmap.setMinZoom(5);//设置地图最小缩放级别
    bmap.setMaxZoom(16);//设置地图最大缩放级别




    //将绘制的内容和设置的属性放入echart实例中

    //$('canvas[data-zr-dom-id="zr_2"]').css("display", "none");//县
    //$('canvas[data-zr-dom-id="zr_3"]').css("display", "none");//人
//地图即将开始缩放


});

