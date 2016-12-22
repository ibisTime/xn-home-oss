$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var companyCode = getCompanyId(getUserId());
	var router = '/merchant/input';
	
	var fields = [{
		field: 'category',
		title: '大类',
		//url: !!view ? ($('#basePath').val() + '/merchant/genre/detail') 
			//	: ($('#basePath').val() + '/merchant/genre/list?parentCode=0&companyCode=' + companyCode),
		detailCode:'808007',
		listCode:"808006",
		params:{
			companyCode:companyCode,
			parentCode:"0",
			type:'1',
		},
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		required: true,
		readonly: !!view,
		onChange: function(v, r) {
			$('#type').renderDropdown({
				//url: $('#basePath').val() + '/merchant/genre/list?companyCode=' + companyCode + '&parentCode=' + v,
				listCode:"808006",
				params:{
					parentCode:v,
					companyCode:companyCode,
				},
				
				keyName: 'code',
				valueName: 'name'
			});
		}
	}, {
		field: 'type',
		title: '小类',
		type: 'select',
		//url: !!view ? ($('#basePath').val() + '/merchant/genre/detail') : '',
		detailCode:'808007',
		keyName: 'code',
		valueName: 'name',
		readonly: !!view,
		required: true
	}, {
		title: '商品名称',
		field: 'name',
		maxlength: 30,
		readonly: !!view,
		required: true
	}, {
		title: '广告语',
		field: 'advTitle',
		maxlength: 250,
		readonly: !!view,
		required: true
	}, {
		title: '广告图',
		field: 'advPic',
		type : 'img',
		readonly: !!view,
		required: true
	}, {
		title: '展示图1',
		field: 'pic1',
		type : 'img',
		readonly: !!view,
		required: true
	},  {
		title: '图文详情',
		field: 'description',
		type: 'textarea',
		readonly: !!view,
		required: true
	}, {
		title: '进货价',
		field: 'costPrice',
		readonly: !!view,
		amount: true,
		required: true
	}, {
		title: '库存数',
		field: 'quantity',
		readonly: !!view,
		maxlength: 11,
		required: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255,
		readonly: !!view
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
		router:"input",
        fields: fields,
        code: code,
        addCode: '808010',
        editCode:"808012",
        detailCode:"808022",
        view: view
    });
	
});