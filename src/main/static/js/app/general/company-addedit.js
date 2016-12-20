$(function() {
	var code = getQueryString('code');
	var isBranch = getQueryString('b');
	if (isBranch) {
		var cmp = getCompany(getUserId());
		if (cmp) {
			code = cmp.code;
		}
	}
	var view = getQueryString('v');
	//var router = '/general/company';
	
	var fields = [{
		field: 'location',
		defaultValue: '1',
		hidden: true
	},{
        field: 'type',
        defaultValue: '1',
        hidden: true
    },{
		title: '公司账号',
		field: 'userId',
		required: true,
		type: 'select',
		listCode: '805055',
		detailCode: '805056',
		params: {

		},
		keyName: 'userId',
		valueName: 'loginName',
		readonly: !!view,
		hidden: isBranch
	}, {
		title: '全称',
		field: 'name',
		required: true,
		maxlength: 30,
		readonly: !!view
	}, {
		title: '简称',
		field: 'abbrName',
		required: true,
		readonly: !!view,
		maxlength: 30
	}, {
		title: '域名',
		field: 'domain',
		required: true,
		readonly: !!view,
		maxlength: 30
	}, {
		title: '标语',
		field: 'slogan',
		required: true,
		readonly: !!view,
		maxlength: 200
	}, {
		title: '电话',
		field: 'mobile',
		maxlength: 30,
		required: true,
		tm: true,
		readonly: !!view
	}, {
		title: '邮箱',
		field: 'email',
		maxlength: 30,
		required: true,
		email: true,
		readonly: !!view
	}, {
		title: 'copyright',
		field: 'copyright',
		maxlength: 200,
		isNotFace: false,
		required: true,
		readonly: !!view
	}, {
		title: '地址',
		required: true,
		type: 'citySelect',
		hidden: !!view,
	}, {
		placeholder: '详细地址（如街道、门牌号等）',
		field: 'address',
		required: true,
		maxlength: 100,
		hidden: !!view
	}, {
		title: '地址',
		field: 'province1',
		hidden: !view,
		readonly: true,
		formatter: function(v, r) {
			var res = $.unique([r.province, r.city, r.area]).reverse();
			return res.join(' ') + ' ' + r.address;
		}
	}, {
		title: '微信二维码',
		field: 'qrCode',
		required: true,
		type: 'img',
		readonly: !!view
	}, {
		title: 'logo',
		field: 'logo',
		required: true,
		type: 'img',
		readonly: !!view
	}, {
		title: 'icon',
		field: 'icon',
		required: true,
		type: 'img',
		readonly: !!view
	}, {
		title: '工商执照',
		field: 'gsyyzzh',
		required: true,
		type: 'img',
		readonly: !!view
	}, {
		title: '公司简介',
		field: 'description',
		required: true,
		type: 'textarea',
		readonly: !!view
	}, {
		title: '服务时间',
		field: 'remark',
		maxlength: 100,
		required: true,
		readonly: !!view
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
	
	// if (isBranch) {
	// 	options.buttons = [{
	// 		'title': '修改',
	// 		handler: function() {
	// 			if ($('#jsForm').valid()) {
	// 				var data = $('#jsForm').serializeObject();
	// 				$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
	// 					data[el.id] = $(el).attr('src');
	// 				});
	// 				if ($('#jsForm').find('#province')[0]) {
	// 					var province = $('#province').val();
	// 					var city = $('#city').val();
	// 					var area = $('#area').val();
	// 					if (!city) {
	// 						data['city'] = province;
	// 						data['area'] = province;
	// 					} else if (!area) {
	// 						data['city'] = province;
	// 						data['area'] = city;
	// 					}
	// 				}
	// 				var url = $("#basePath").val()+ router + "/" + (code ? 'edit' : 'add');
	// 				ajaxPost(url, data).then(function(res) {
	// 					if (res.success) {
	// 						alert("操作成功");
	// 					}
	// 				});
	// 			}
	// 		}
	// 	}];
	// }
	
	//buildDetail(router, fields, code, options);
	buildDetail({
        fields: fields,
        code: code,
        addCode: '806005',
        editCode: '806004',
        detailCode: '806010',
		view: view
    });
});