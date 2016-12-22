$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var companyCode = getCompanyId(getUserId());
	var router = '/merchant/position';
	
	var fields = [{
		field: 'parentCode',
		type: 'hidden',
		value: '0'
	}, {
		title: '位置名称',
		field: 'name',
		readonly: !!view,
		required: true
	}, {
		title: '图片',
		field: 'pic',
		type: 'img',
		readonly: !!view,
		required: true,
	}, {
		title: '次序',
		field: 'orderNo',
		readonly: !!view,
		maxlength: 11,
		required: true
	}, {
		field: 'companyCode',
		type: 'hidden',
		value: companyCode
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
	//buildDetail(router, fields, code, options);
	
	buildDetail({
		router:"position",
        fields: fields,
        code: code,
        addCode: '808000',
        editCode:"808002",
        detailCode:"808007",
        deleteCode:"808001",
        pageCode:"808005",
        listCode:"808006",
//        searchParams: {
//            type: "2"
//        },
        view: view
    });
});