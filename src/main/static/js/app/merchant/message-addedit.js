$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/merchant/message';
	
	var fields = [{
		title: '类型',
		field: 'type',
		required: true,
		type: 'select',
		readonly: !!view,
		data: {'1':'公告', '4': '短信'},
		onChange: function(v) {
			if (v == 4) {
				$('#content').parent().hide();
			} else {
				$('#content').parent().show();
			}
		}
	}, {
		title: '标题',
		field: 'title',
		maxlength: 60,
		required: true,
		readonly: !!view
	}, {
		title: '内容',
		field: 'content',
		type: 'textarea',
		required: true,
		readonly: !!view,
	},{
		title: '备注',
		field: 'remark',
		maxlength: 30,
		readonly: !!view,
	},{
		title: '',
		field: 'companyCode',
		type: 'hidden',
		value: getCompanyId(getUserId())
	}, {
		field: 'toCompany',
		type: 'hidden',
		value: getCompanyId(getUserId())
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
	buildList({
		 router: 'message',
         columns: columns,
		 searchParams: {
			 companyCode: getCompanyId(getUserId())
		},
    });
});