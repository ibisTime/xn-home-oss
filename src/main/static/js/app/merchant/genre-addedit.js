$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var companyCode = getCompanyId(getUserId());
	var router = '/merchant/genre';
	
	var fields = [{
		title: '大类',
		field: 'parentCode',
		type: 'select',
		//url: $('#basePath').val() + '/merchant/genre/list?parentCode=0&companyCode=' + companyCode,
		listCode:'808006',
		params:{
			type:"1",
			companyCode:companyCode,
		},
		keyName: 'code',
		valueName: 'name',
		readonly: !!view,
		defaultOption: '选此创建大类',
		required: true
	}, {
		title: '类别名称',
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
        addCode: '808000',
        editCode:"808002",
        detailCode:"808007",
        searchParams: {
            type: "1"
        },
        view: view
    });
	
	
	
	
	
});