$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/merchant/order';
	
	var fields = [{
		title: '发货单基本信息',
		type: 'title'
	}, {
		title: '编号',
		field: 'code1',
		'[value]': 'code',
		readonly: !!view
	}, {
		title: '下单用户',
		field: 'mobile',
		readonly: !!view
	}, {
		title: '下单说明',
		field: 'applyNote',
		readonly: !!view
	}, {
		title: '下单时间',
		field: 'applyDatetime',
		formatter: dateTimeFormat,
		readonly: !!view
	}, {
		title: '收货信息',
		type: 'title'
	}, {
		title: '收货人姓名',
		field: 'receiver',
		readonly: !!view
	}, {
		title: '联系电话',
		field: 'reMobile',
		readonly: !!view,
	}, {
		title: '收货地址',
		field: 'reAddress',
		readonly: !!view
	}, {
		title: '商品信息',
		type : 'title'
	}, {
		title: '商品列表',
		field: 'productOrderList',
		type: 'o2m',
		readonly: !!view,
		columns: [{
			title: '名称',
			field: 'productName'
		}, {
			title: '数量',
			field: 'quantity'
		}, {
			title: '零售价',
			field: 'salePrice',
			formatter: moneyFormat
		}]
	}, {
		title: '备注',
		field: 'remark',
		readonly: !!view
	}];
	
//	var options = {};
//	if (view) {
//		options.buttons = [{
//			'title': '返回',
//			handler: function() {
//				goBack();
//			}
//		}];
//	}
//	buildDetail(router, fields, code, options);
	buildDetail({
		router:"order",
        fields: fields,
        code: code,
        listCode:"808071",
        pageCode:"808070",
        logisticsCode:"808054",
        detailCode:"808072",
        sureCode:"808057",
        abnormalCode:"808056",
        view: view
    });
	
	
	
});