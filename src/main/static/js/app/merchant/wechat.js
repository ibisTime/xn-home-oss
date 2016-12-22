$(function() {
	var companyCode = getCompanyId(getUserId());
	var router = '/merchant/wechat';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field: 'companyCode',
		type: 'hidden',
		value: getCompanyId(getUserId())
	},{
		field : 'account',
		title : '账户',
		search: true
	},{
		field : 'password',
		title : '密码'
	},{
    	field : 'type',
		title : '类型',
		type : 'select',
		data : {'1':'公司'}
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router:'wechat',
		columns:columns, 
		searchParams: {
			companyCode: getCompanyId(getUserId())
		}
	});
});

