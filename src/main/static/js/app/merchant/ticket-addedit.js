$(function() {
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	var companyCode = getCompanyId(getUserId());
	var router = '/merchant/ticket';
	
	var fields = [{
		title: '单号',
		'[value]': 'code',
		readonly: true,
		hidden: !view
	}, {
		title: '积分面值',
		field: 'amount',
		readonly: !!view,
		required: true,
		amount: true
	}, {
		title: '人民币价格',
		field: 'cnyPrice',
		readonly: !!view,
		required: true,
		amount: true
	}, {
		title: '创建时间',
		field: 'createDatetime',
		readonly: true,
		hidden: !view,
		required: true,
		formatter: dateTimeFormat
	}, {
		title: '使用者手机号',
		field: 'scannerMobile',
		readonly: true,
		hidden: !view
	}, {
		title: '使用/作废时间',
		field: 'scanDatetime',
		readonly: true,
		hidden: !view,
		required: true,
		formatter: dateTimeFormat
	}, {
		field: 'companyCode',
		type: 'hidden',
		value: companyCode
	}, {
		field: 'style',
		type: 'hidden',
		value: '1'
	}];
	
	var options = {};
	if (view) {
		options.buttons = [{
			'title': '返回',
			handler: function() {
				goBack();
			}
		}];
	}
	//buildDetail(router, fields, code, options);
	buildDetail({
        fields: fields,
        code: code,
        addCode: '805320',
        discardCode:"805322",
        pageCode:"805330",
        listCode:"805331",
        detailCode:"805332",
        searchParams: {
        	useTimes: "1"
        },
        view: view
    });
	
});