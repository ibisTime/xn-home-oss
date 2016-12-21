$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	//var router = '/std/intent';
	
	var fields = [{
		title: '意见单位',
		field: 'fromCompany',
		readonly: true
	}, {
		title: '联系人',
		field: 'fromPerson',
		readonly: true
	}, {
		title: '联系电话',
		field: 'fromContact',
		readonly: true
	}, {
		title: '意向描述',
		field: 'content',
		readonly: true
	}, {
		title: '状态',
		field: 'status',
		required: true,
		type: 'select',
		key: 'intent_status',
		readonly: !!view
	}, {
		title: '最后操作人',
		field: 'updater',
		readonly: true,
		hidden: !view
	}, {
		title: '最后操作时间',
		field: 'updateDatetime',
		readonly: true,
		formatter: dateTimeFormat,
		hidden: !view
	}, {
		title: '最后操作备注',
		field: 'remark1',
		'[value]': 'remark',
		readonly: true,
		hidden: !view
	}, {
		title: '备注',
		field: 'remark',
		value: '',
		maxlength: 250,
		hidden: !!view
	}];
	
	// var options = {};
	// if (view) {
	// 	options.buttons = [{
	// 		'title': '返回',
	// 		handler: function() {
	// 			goBack();
	// 		}
	// 	}];
	// }
    buildDetail({
        fields: fields,
        code: code,
        //addCode: '806005',
        editCode: '806061',
        detailCode: '806072',
        view: view
    });
});