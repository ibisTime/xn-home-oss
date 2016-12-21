$(function() {
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	//var router = '/std/menu';
	var isBranch = getQueryString('b');
	
	var fields = [{
		field: 'isCompanyEdit',
		type: 'hidden',
		value: isBranch ? '1' : '0'
	}, {
		field: 'status',
		type: 'hidden',
		value: '1'
	}, {
		field: 'belong',
		type: 'hidden',
		defaultValue: '3',
		afterSet: function(v) {
			if (v == 1 || v == 2) {
				$('#companyCode').parent().hide();
				$('#parentCode').parent().hide();
			}
		}
	}, {
		title: '隶属',
		field: 'companyCode',
		type: 'select',
		required: true,
		//url: $('#basePath').val() + '/general/company/'+(view ? 'detail' : 'list'),
        listCode: '806013',
        detailCode: '806010',
		keyName: 'code',
		valueName: 'name',
		readonly: view,
		emptyValue: '0',
		hidden: isBranch,
		onChange: function(v) {
			$('#parentCode').renderDropdown({
                listCode: '806051',
                params: {
                    parentCode: 0,
                    companyCode: v || 0,
                    type: 1
                },
                keyName: 'code',
                valueName: 'name'
            });
		},
		afterSet: function(v, r) {
			if (isBranch) {
				$('#companyCode').val(getCompanyId(getUserId()));
			}
		}
	}, {
		title: '父菜单',
		field: 'parentCode',
		type: 'select',
		readonly: view,
		hidden: isBranch,
		emptyValue: '0',
		onChange: function(v) {
			if (v) {
				$('#location').parent().hide();
				$('#location').val('0');
			} else {
				!isBranch && $('#location').parent().show();
			}
			
		}
	}, {
		title: '名称',
		field: 'name',
		required: true,
		maxlength: 30,
		readonly: view
	}, {
		title: '位置',
		field: 'location',
		type: 'select',
		required: true,
		key: 'menu_location',
		emptyValue: '0',
		hidden: isBranch,
		readonly: view
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		maxlength: 10,
		number: true,
		readonly: view,
		hidden: isBranch
	}, {
		title: '内容格式',
		field: 'contentType',
		required: true,
		type: 'radio',
		readonly: view,
		items: [{
			key: 'list',
			icon: 'zmdi-view-list-alt',
			value: '多条列表'
		}, {
			key: 'ele',
			icon: 'zmdi-apps',
			value: '单条详情'
		}]
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 200,
		readonly: view
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
	
	//buildDetail(router, fields, code, options);
    buildDetail({
        fields: fields,
        code: code,
        addCode: '806040',
        editCode: '806042',
        detailCode: '806053',
        searchParams: {
        	type: "1"
		},
        view: view
    });
});