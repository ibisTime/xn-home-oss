$(function() {
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	var router = '/merchant/wechat';
	
	var fields = [{
		field: 'type',
		type: 'hidden',
		value: '1'
	}, {
		field: 'companyCode',
		type: 'hidden',
		value: getCompanyId(getUserId())
	}, {
		title: '账户',
		field: 'account',
		required: true,
		type: 'select',
		data: {'AppID':'AppID','AppSecret':'AppSecret'},
		readonly: view
	}, {
		title: '密码',
		field: 'password',
		type: 'password',
		required: true,
		readonly: view
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		readonly: view
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
	
	buildDetail(router, fields, code, options);
});