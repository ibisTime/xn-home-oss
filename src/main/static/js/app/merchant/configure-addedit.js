$(function() {
	var code= getQueryString('code');
	var router = '/merchant/configure';
	
	var fields = [{
		field: 'companyCode',
		type: 'hidden',
		value: getCompanyId(getUserId())
	}, {
		title: '参数名',
		field: 'cname',
		readonly: true
	}, {
		title: '数值',
		field: 'cvalue',
		required: true,
		maxlength: 255
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255
	}];
	
	//buildDetail(router, fields, code);
	buildDetail({
		fields:fields,
		code:code,
	    editCode:"808910",
	    detailCode:"808916",
	    pageCode:"808915",
		
	});
	
});