var pathSymbols = {
	paper: 'path://M733.866667 0H17.066667v1024h989.866666V273.066667l-273.066666-273.066667z m177.493333 273.066667H733.866667V95.573333L911.36 273.066667z m27.306667 682.666666H85.333333V68.266667h580.266667v273.066666h273.066667v614.4z" p-id="4658" fill="#707070"></path><path d="M187.733333 409.6h136.533334v34.133333H187.733333zM358.4 409.6h477.866667v34.133333H358.4zM187.733333 546.133333h136.533334v34.133334H187.733333zM358.4 546.133333h477.866667v34.133334H358.4zM187.733333 682.666667h136.533334v34.133333H187.733333zM358.4 682.666667h477.866667v34.133333H358.4zM187.733333 819.2h136.533334v34.133333H187.733333zM358.4 819.2h477.866667v34.133333H358.4z',
	income: 'path://M874.984558 15.256797h-136.195261l-153.134837 282.160729c-40.838792 76.467995-65.817322 127.292659-74.937566 152.485864h-2.606774c-26.941276-61.254726-102.961124-206.131977-228.076361-434.644614h-144.013602l267.824958 460.05843h-219.6041v101.655264h257.397864v140.102948h-257.397864v102.960135h257.397864v203.964447h127.720032v-203.964447h248.274651v-102.960135h-248.273662v-140.102948h248.274651v-101.655264h-213.084692l270.431731-460.05843z',
    authenticate: 'path://M328.47 129.07l261.16 152.176c9.872 6.34 20.642 7.925 32.309 4.755 11.667-3.17 20.641-9.737 26.923-19.701 5.385-10.87 6.507-21.966 3.366-33.289-3.141-11.322-9.648-20.154-19.52-26.495L371.548 54.341c-10.77-6.341-21.764-7.926-32.982-4.756s-19.968 10.19-26.25 21.06c-5.385 9.964-6.732 20.834-4.04 32.61 2.693 11.775 9.424 20.38 20.194 25.815zM568.09 319.29l-261.16-152.176-150.773 263.59 261.16 152.175 150.773-263.59zM91.541 543.477L352.7 695.652c9.872 6.341 20.642 7.926 32.309 4.756 11.667-3.17 20.641-10.19 26.923-21.06 5.385-9.964 6.507-20.833 3.366-32.61-3.141-11.775-9.648-20.38-19.52-25.815L134.62 468.748c-10.77-6.341-21.764-7.926-32.982-4.756s-19.968 9.738-26.25 19.702c-5.385 10.87-6.731 22.192-4.04 33.967 2.693 11.776 9.424 20.381 20.194 25.816zM990.794 665.76l-476.55-252.72-43.078 76.087 455.011 290.765c16.154 9.058 32.757 11.096 49.809 6.114s30.065-15.172 39.04-30.571c8.974-15.399 11.218-31.93 6.73-49.593-4.487-17.663-14.808-31.024-30.962-40.082z m-485.3 189.54c-8.527-8.605-19.33-17.617-30.996-17.617H87.725c-11.667 0-21.986 9.012-30.512 17.617s-12.789 18.796-12.789 30.571v30.571c0 8.605-43.078 4.969-43.078 4.969L0 976h561.36v-54.588s-40.834 3.636-41.732-4.969c-0.897-8.605-1.346-18.795-1.346-30.57 0-11.776-4.263-21.967-12.789-30.572z'
};

var labelSetting = {
    normal: {
        show: true,
        position: 'outside',
        offset: [10, 0],
        textStyle: {
            fontSize: 12
        }
    }
};

var allSeries4 = [
	[{
        name: '浙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 113,
            symbol: pathSymbols.paper
        }, {
            value: 51.887,
            symbol: pathSymbols.income
        }, {
            value: 24,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '上海',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 90,
            symbol: pathSymbols.paper
        }, {
            value: 0.061,
            symbol: pathSymbols.income
        }, {
            value: 18,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '北京',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 47,
            symbol: pathSymbols.paper
        }, {
            value: 63.138,
            symbol: pathSymbols.income
        }, {
            value: 17,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '安徽',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 32,
            symbol: pathSymbols.paper
        }, {
            value: 35.341,
            symbol: pathSymbols.income
        }, {
            value: 3,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '黑龙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 100,
            symbol: pathSymbols.paper
        }, {
            value: 4.99,
            symbol: pathSymbols.income
        }, {
            value: 107,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '湖北',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 100,
            symbol: pathSymbols.paper
        }, {
            value: 11.586,
            symbol: pathSymbols.income
        }, {
            value: 42,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '甘肃',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 20,
            symbol: pathSymbols.paper
        }, {
            value: 0.0,
            symbol: pathSymbols.income
        }, {
            value: 155,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '陕西',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 40,
            symbol: pathSymbols.paper
        }, {
            value: 13.625,
            symbol: pathSymbols.income
        }, {
            value: 22,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '四川',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 73,
            symbol: pathSymbols.paper
        }, {
            value: 14.872,
            symbol: pathSymbols.income
        }, {
            value: 36,
            symbol: pathSymbols.authenticate
        }]
    }],
    [{
        name: '浙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 140,
            symbol: pathSymbols.paper
        }, {
            value: 46.885,
            symbol: pathSymbols.income
        }, {
            value: 11,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '上海',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 94,
            symbol: pathSymbols.paper
        }, {
            value: 53.411,
            symbol: pathSymbols.income
        }, {
            value: 20,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '北京',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 48,
            symbol: pathSymbols.paper
        }, {
            value: 73.586,
            symbol: pathSymbols.income
        }, {
            value: 18,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '安徽',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 32,
            symbol: pathSymbols.paper
        }, {
            value: 11.36,
            symbol: pathSymbols.income
        }, {
            value: 1,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '黑龙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 96,
            symbol: pathSymbols.paper
        }, {
            value: 4.73,
            symbol: pathSymbols.income
        }, {
            value: 60,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '湖北',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 95,
            symbol: pathSymbols.paper
        }, {
            value: 2.79,
            symbol: pathSymbols.income
        }, {
            value: 41,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '甘肃',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 20,
            symbol: pathSymbols.paper
        }, {
            value: 0.0,
            symbol: pathSymbols.income
        }, {
            value: 170,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '陕西',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 36,
            symbol: pathSymbols.paper
        }, {
            value: 11.939,
            symbol: pathSymbols.income
        }, {
            value: 15,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '四川',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 72,
            symbol: pathSymbols.paper
        }, {
            value: 6.127,
            symbol: pathSymbols.income
        }, {
            value: 37,
            symbol: pathSymbols.authenticate
        }]
    }],[{
        name: '浙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 128,
            symbol: pathSymbols.paper
        }, {
            value: 64.392,
            symbol: pathSymbols.income
        }, {
            value: 7,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '上海',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 97,
            symbol: pathSymbols.paper
        }, {
            value: 27.518,
            symbol: pathSymbols.income
        }, {
            value: 16,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '北京',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 48,
            symbol: pathSymbols.paper
        }, {
            value: 78.066,
            symbol: pathSymbols.income
        }, {
            value: 18,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '安徽',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 41,
            symbol: pathSymbols.paper
        }, {
            value: 0.658,
            symbol: pathSymbols.income
        }, {
            value: 1,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '黑龙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 84,
            symbol: pathSymbols.paper
        }, {
            value: 4.97,
            symbol: pathSymbols.income
        }, {
            value: 53,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '湖北',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 85,
            symbol: pathSymbols.paper
        }, {
            value: 7.478,
            symbol: pathSymbols.income
        }, {
            value: 40,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '甘肃',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 21,
            symbol: pathSymbols.paper
        }, {
            value: 0.0,
            symbol: pathSymbols.income
        }, {
            value: 121,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '陕西',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 40,
            symbol: pathSymbols.paper
        }, {
            value: 11.89,
            symbol: pathSymbols.income
        }, {
            value: 15,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '四川',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 77,
            symbol: pathSymbols.paper
        }, {
            value: 11.433,
            symbol: pathSymbols.income
        }, {
            value: 44,
            symbol: pathSymbols.authenticate
        }]
    }],[{
        name: '浙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 114,
            symbol: pathSymbols.paper
        }, {
            value: 23.24,
            symbol: pathSymbols.income
        }, {
            value: 8,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '上海',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 99,
            symbol: pathSymbols.paper
        }, {
            value: 25.724,
            symbol: pathSymbols.income
        }, {
            value: 16,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '北京',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 49,
            symbol: pathSymbols.paper
        }, {
            value: 84.524,
            symbol: pathSymbols.income
        }, {
            value: 16,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '安徽',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 51,
            symbol: pathSymbols.paper
        }, {
            value: 0.0,
            symbol: pathSymbols.income
        }, {
            value: 2,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '黑龙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 87,
            symbol: pathSymbols.paper
        }, {
            value: 4.886,
            symbol: pathSymbols.income
        }, {
            value: 50,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '湖北',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 97,
            symbol: pathSymbols.paper
        }, {
            value: 3.396,
            symbol: pathSymbols.income
        }, {
            value: 48,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '甘肃',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 34,
            symbol: pathSymbols.paper
        }, {
            value: 0.28,
            symbol: pathSymbols.income
        }, {
            value: 0,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '陕西',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 49,
            symbol: pathSymbols.paper
        }, {
            value: 12.599,
            symbol: pathSymbols.income
        }, {
            value: 23,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '四川',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 81,
            symbol: pathSymbols.paper
        }, {
            value: 12.428,
            symbol: pathSymbols.income
        }, {
            value: 17,
            symbol: pathSymbols.authenticate
        }]
    }],[{
        name: '浙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 110,
            symbol: pathSymbols.paper
        }, {
            value: 27.72,
            symbol: pathSymbols.income
        }, {
            value: 16,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '上海',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 81,
            symbol: pathSymbols.paper
        }, {
            value: 4.902,
            symbol: pathSymbols.income
        }, {
            value: 10,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '北京',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 54,
            symbol: pathSymbols.paper
        }, {
            value: 84.144,
            symbol: pathSymbols.income
        }, {
            value: 14,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '安徽',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 54,
            symbol: pathSymbols.paper
        }, {
            value: 35.86,
            symbol: pathSymbols.income
        }, {
            value: 2,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '黑龙江',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 86,
            symbol: pathSymbols.paper
        }, {
            value: 12.48,
            symbol: pathSymbols.income
        }, {
            value: 65,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '湖北',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 108,
            symbol: pathSymbols.paper
        }, {
            value: 9.369,
            symbol: pathSymbols.income
        }, {
            value: 22,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '甘肃',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 33,
            symbol: pathSymbols.paper
        }, {
            value: 0.526,
            symbol: pathSymbols.income
        }, {
            value: 0,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '陕西',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 45,
            symbol: pathSymbols.paper
        }, {
            value: 13.888,
            symbol: pathSymbols.income
        }, {
            value: 25,
            symbol: pathSymbols.authenticate
        }]
    },{
        name: '四川',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        barGap: '15%',
        symbolSize: ['80%', '60%'],
        barCategoryGap: '20%',
        data: [{
            value: 91,
            symbol: pathSymbols.paper
        }, {
            value: 27.212,
            symbol: pathSymbols.income
        }, {
            value: 32,
            symbol: pathSymbols.authenticate
        }]
    }]
]

//$(document).ready(function(){
//var mychart = echarts.init(document.getElementById("mapDiv4"),'vintage');
//option = {
//		baseOption:{
//			timeline: {
//	            // y: 0,
//	            axisType: 'category',
//	            // realtime: false,
//	            // loop: false,
//	            autoPlay: true,
//	            // currentIndex: 2,
//	            playInterval: 3000,
//	            // controlStyle: {
//	            //     position: 'left'
//	            // },
//	            data: [
//	                '2012',
//	                {
//	                    value: '2013',
//	                    tooltip: {
//	                        formatter: '{b}年 “十二五”开局之年'
//	                    },
//	                    symbol: 'diamond',
//	                    symbolSize: 16
//	                } ,'2014','2015', {
//	                    value: '2016',
//	                    tooltip: {
//	                        formatter: '{b}年 提出建设“双一流”发展战略'
//	                    },
//	                    symbol: 'diamond',
//	                    symbolSize: 16
//	                } 
//	            ],
//	            label: {
//	                formatter : function(s) {
//	                    return (new Date(s)).getFullYear();
//	                }
//	            }
//	        },
//	        title: {
//	            text: '985高校科研经费东中西部各省各科研成果情况',
//	            subtext: '数据来源教育部科技司',
//	            left: 'center'
//	        },
//    legend: {
//        data: ['浙江','上海','北京','安徽','黑龙江','湖北','四川','陕西','甘肃'],
//        right: 'right'
//       
//    },
//    tooltip: {
//        trigger: 'axis',
//        axisPointer: {
//            type: 'shadow'
//        }
//    },
//    grid: {
//        containLabel: true,
//        left: 20
//    },
//    yAxis: {
//        data: ['鉴定成果数', '收入（百万）', '学术论文（百篇）'],
//        inverse: false,
//        axisLine: {show: false},
//        axisTick: {show: false},
//        axisLabel: {
//            margin: 30,
//            textStyle: {
//                fontSize: 14
//            }
//        }
//    },
//    xAxis: {
//        splitLine: {show: false},
//        axisLabel: {show: false},
//        axisTick: {show: false},
//        axisLine: {show: false}
//    },
//    series: allSeries4[0]
//		},
//		options: []
//		
//};
//
//for(var n = 0; n<5 ;n++){
//	option.options.push({
//		series: allSeries4[n]
//	})
//}
//mychart.setOption(option);
//})