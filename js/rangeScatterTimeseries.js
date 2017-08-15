var bmap, //百度地图实例
      myChart, //echart实例
     preZoomLevel;//缩放开始时的缩放级别;

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

var province_level = [
    ["浙江省", 119.957202, 29.159494, 347],
    ["江西省", 115.676082, 27.757258, 290],
    ["山东省", 118.527663, 36.09929, 176],
    ["山西省", 112.515496, 37.866566, 166],
    ["河北省", 115.661434, 38.61384, 140],
    ["江苏省", 119.368489, 33.013797, 131],
    ["河南省", 113.486804, 34.157184, 123],
    ["安徽省", 117.216005, 31.859252, 95],
    ["福建省", 117.984943, 26.050118, 60],
    ["四川省", 102.89916, 30.367481, 56],
    ["湖南省", 111.720664, 27.695864, 50],
    ["陕西省", 109.503789, 35.860026, 40],
    ["湖北省", 112.410562, 31.209316, 28],
    ["广东省", 113.394818, 23.408004, 17],
    ["北京省", 116.395645, 39.929986, 14],
    ["上海市", 121.487899, 31.249162, 12],
    ["甘肃省", 102.457625, 38.103267, 10],
    ["新疆维吾尔自治区", 85.614899, 42.127001, 7],
    ["云南省", 101.592952, 24.864213, 7],
    ["辽宁省", 122.753592, 41.6216, 6],
    ["内蒙古自治区", 114.415868, 43.468238, 6],
    ["广西壮族自治区", 108.924274, 23.552255, 4],
    ["西藏自治区", 89.137982, 31.367315, 3],
    ["吉林省", 126.262876, 43.678846, 2],
    ["海南省", 109.733755, 19.180501, 1],
    ["天津市", 117.210813, 39.14393, 1],
    ["台湾省", 121.973871, 24.086957, 0]
];

var city_level = [
    ["临安府", 102.82, 23.62, 222],
    ["云南府", 102.71, 25.05, 218],
    ["大理府", 100.16, 25.70, 171],
    ["丽江府", 99.90, 26.48, 120],
    ["曲靖府", 104.11, 26.22, 61],
    ["楚雄府", 101.28, 25.66, 60],
    ["永昌府", 99.17, 25.11, 52],
    ["澄江府", 102.91, 24.67, 27],
    ["蒙化厅", 100.31, 25.23, 22],
    ["顺宁府", 99.91, 24.59, 22],
    ["武定州", 101.90, 25.62, 18],
    ["昭通府", 103.72, 27.34, 17],
    ["元江府", 102.01, 23.60, 11],
    ["广西州", 103.76, 24.52, 10],
    ["永北厅", 100.75, 26.69, 10],
    ["东川府", 103.29, 26.42, 4],
    ["景东厅", 100.84, 24.45, 4],
    ["开化府", 104.24, 23.38, 4],
    ["普洱府", 101.22, 22.61, 3],
    ["镇雄州", 104.86, 27.42, 1]
];
var years = ['元代','清代'];
var zoomvalue = [5,7];
var visualMapHandleMaxValue=[350,250];
var centervalue = [[105.871518, 38.386845],[101.83629,25.45213]];
var titlevalue = ['全元文作者分布图','云南作家分布图'];
var province_level_c = province_level.map(function(item) {
    return {
        name: item[0],
        value: [
            item[1],
            item[2],
            item[3]
        ]
    };
});

var city_level_c = city_level.map(function(item) {
    return {
        name: item[0],
        value: [
            item[1],
            item[2],
            item[3]
        ]
    };
});



var allSeries = [{ //绘制散点图 省
    name: 'province_qyw',
    type: 'scatter',
    coordinateSystem: 'bmap',
    // symbolSize: function(val) {
    //     return val[2] / 10;
    // },
    tooltip: { //应用提示框组件
        trigger: 'item',
        show: true,
        formatter: function(params) {
            return params.name + ' : ' + params.value[2] + "人";
        }
    },
    data: province_level_c,
    // itemStyle: {
    //     normal: {
    //         color: 'purple'
    //     }
    // }
}, {//省 top5 绘制涟漪散点图
    name: 'province_qyw_top5',
    type: 'effectScatter',
    coordinateSystem: 'bmap',
    data: province_level_c.sort(function(a, b) {
        return b.value[2] - a.value[2];
    }).slice(0, 5),
    symbolSize: function(val) {
        return val[2] / 10;
    },
    tooltip: { //应用提示框组件
        trigger: 'item',
        show: true,
        formatter: function(params) {
            return params.name + ' : ' + params.value[2] + "人";
        }
    },
    showEffectOn: 'render',
    rippleEffect: {
        brushType: 'stroke'
    },
    hoverAnimation: true,
    label: {
        normal: {
            formatter: '{b}',
            position: 'right',
            show: false
        }
    },
    itemStyle: {
        normal: {
            //color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
        }
    },
    zlevel: 1 //设置绘制的元素在第1层的canvas中  元素data-zr-dom-id的属性为zr_1
},{ //绘制散点图 全元文
    name: 'city_qyw',
    type: 'scatter',
    coordinateSystem: 'bmap',
    // symbolSize: function(val) {
    //     return val[2] / 10;
    // },
    tooltip: { //应用提示框组件
        trigger: 'item',
        show: true,
        formatter: function(params) {
            return params.name + ' : ' + params.value[2] + "人";
        }
    },
    data: city_level_c,
    // itemStyle: {
    //     normal: {
    //         color: 'purple'
    //     }
    // }
}, {//全元文分省数量 top5 绘制涟漪散点图
    name: 'city_qyw_top5',
    type: 'effectScatter',
    coordinateSystem: 'bmap',
    data: city_level_c.sort(function(a, b) {
        return b.value[2] - a.value[2];
    }).slice(0, 5),
    symbolSize: function(val) {
        return val[2] / 10;
    },
    tooltip: { //应用提示框组件
        trigger: 'item',
        show: true,
        formatter: function(params) {
            return params.name + ' : ' + params.value[2] + "人";
        }
    },
    showEffectOn: 'render',
    rippleEffect: {
        brushType: 'stroke'
    },
    hoverAnimation: true,
    label: {
        normal: {
            formatter: '{b}',
            position: 'right',
            show: false
        }
    },
    itemStyle: {
        normal: {
            //color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
        }
    },
    zlevel: 1 //设置绘制的元素在第1层的canvas中  元素data-zr-dom-id的属性为zr_1
}];

$(document).ready(function() {
    var currentSeries = new Array();
    
    
    //echart+baiduMap
    myChart = echarts.init(document.getElementById("mapDiv"));

    //设置echart实例的配置项以及数据
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
             title: { //设置图表标题
                 text: '全元文作者分布图', //主标题
                 subtext: '', //副标题
                 left: 'center',
                 top: 'top',
                 textStyle: {
                     color: '#fff'
                 }
             },
             tooltip: { //应用提示框组件
                 trigger: 'item',
                 formatter: function (params) {
                     return params.name + ' : ' + params.value[2] + "人";
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
             series: allSeries[0,1]
         },
         options : []
     }

    for (var n = 0; n < years.length; n++) {
       
        currentSeries = allSeries.slice(2*n,2*n+2);//选取出allSeries中的两个样式
    
        option.options.push({//设置时间变换后的option
            title: {
                text: titlevalue[n],
                subtext: years[n]
            },
            bmap:{
                center :centervalue[n],
                zoom : zoomvalue[n]
            },
            visualMap: { //应用视觉映射组件
                min: 0,
                max: visualMapHandleMaxValue[n],
                calculable: true, //是否显示拖拽用的手柄
                //splitNumber: 6,
                left: 5,
                bottom: 60,
                inRange: {
                    color: ['#50a3ba', '#eac736', '#d94e5d']
                },
                textStyle: {
                    color: '#fff'
                }
            },
            series: currentSeries

        });
        console.log(years[n + 1])
    }
    //将绘制的内容和设置的属性放入echart实例中
    myChart.setOption(option);
    //$('canvas[data-zr-dom-id="zr_2"]').css("display", "none");//县
    //$('canvas[data-zr-dom-id="zr_3"]').css("display", "none");//人

    // 添加百度地图插件  增加地图基本功能
    bmap = myChart.getModel().getComponent('bmap').getBMap();
    //添加地图类型控件
    bmap.addControl(new BMap.MapTypeControl());
    //添加平移缩放控件
    bmap.addControl(new BMap.NavigationControl());
    //添加缩放监听
    //bmap.addEventListener("zoomstart", mapZoomStart);
    //bmap.addEventListener("zoomend", mapZoomEnd);
    bmap.setMinZoom(5);//设置地图最小缩放级别
    bmap.setMaxZoom(16);//设置地图最大缩放级别
});

//地图即将开始缩放
function mapZoomStart() {
    preZoomLevel = bmap.getZoom(); //获取缩放开始时的缩放级别
}

//地图缩放完毕 控制图层显隐
function mapZoomEnd() {
    var zoomLevel = bmap.getZoom();
    var currentSeries = new Array();
    if (zoomLevel <= 7 && !(preZoomLevel <= 7)) { //省
        //当前缩放级别小于等于7，则放入省级的数据
        for (var i = 0; i < allSeries.length; i++) {
            if (allSeries[i].name.indexOf("province") != -1) {
                currentSeries.push(allSeries[i]);
            }
        }
        $('canvas[data-zr-dom-id="zr_1"]').css("display", "block");//将省级别的涟漪显示
        $('canvas[data-zr-dom-id="zr_2"]').css("display", "none");//将市县级别的涟漪隐藏
        var option = myChart.getOption();
        option.series = currentSeries;
        option.visualMap[0].max = 350;
        option.visualMap[0].range = [0, 350]; //指定手柄位置
        option.bmap[0].zoom = zoomLevel;
        myChart.setOption(option);
    } else if (zoomLevel > 7 && !(preZoomLevel > 7)) { //市县级
        //当前缩放级别大于7，则放入县级的数据
        for (var i = 0; i < allSeries.length; i++) {
            if (allSeries[i].name.indexOf("city") != -1) {
                currentSeries.push(allSeries[i]);
            }
        }
        $('canvas[data-zr-dom-id="zr_1"]').css("display", "none");//将省级别的涟漪隐藏
        $('canvas[data-zr-dom-id="zr_2"]').css("display", "block");//将市县级别的涟漪显示
        var option = myChart.getOption();
        option.series = currentSeries;
        option.visualMap[0].max = 30;
        option.visualMap[0].range = [0, 30]; //指定手柄位置
        option.bmap[0].zoom = zoomLevel;
        myChart.setOption(option);
    }
}