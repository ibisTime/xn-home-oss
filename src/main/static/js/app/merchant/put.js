$(function() {
	var code = getQueryString('code');
	var companyCode = getCompanyId(getUserId());
	var view = true;
	var router = '/merchant/input';
	
	var fields = [{
		title: '商品名称',
		field: 'name',
		maxlength: 255,
		readonly: true
	}, {
		field: 'category',
		title: '大类',
		//url: !!view ? ($('#basePath').val() + '/merchant/genre/detail') 
			//	: ($('#basePath').val() + '/merchant/genre/list?parentCode=0&companyCode=' + companyCode),
		listCode:'808006',
		detailCode:"808007",
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
					type:'1',
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
		title: '库存',
		field: 'quantity',
		'Z+': true,
		maxlength: 11,
		readonly: true
	}, {
		title: '原价',
		field: 'price1',
		amount: true,
		required: true
	}, {
		title: '折扣价',
		amount: true,
		field: 'price2',
		required: true
	}, {
		title: '位置',
		field: 'location',
		type: 'select',
		//url: $('#basePath').val() + '/merchant/position/list?companyCode=' + companyCode,
		listCode:'808006',
		params:{
			companyCode:companyCode,
			type:'2'
		},
		
		keyName: 'code',
		valueName: 'name',
		defaultOption: '普通',
		required: true
	}, {
		title: '顺序',
		maxlength: 11,
		number: true,
		field: 'orderNo',
		required: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255
	}];
	
	buildDetail({
			router:"input", 
			fields:fields, 
			code:code,
			detailCode: "808022",
			addCode:"808010",
			deleteCode:"808011",
			editCode:"808012",
			pageCode:"808020",
			listCode:"808021",
			detailCode:"808022",
			putCode:"808013",
			pullCode:"808014",
			buttons: [{
				title: '上架',
				handler: function() {
					if ($('#jsForm').valid()) {
						var data = $('#jsForm').serializeObject();
						$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
							data[el.id] = $(el).attr('src');
						});	
//					var url = $("#basePath").val()+ '/merchant/input/put';
//					ajaxPost(url, data).then(function(res) {
//						if (res.success) {
//							alert("操作成功");
//							goBack();
//						}
//					});
					 reqApi({
				            code: "808013",
				            json: data
				        }).done(function(data) {
				            alert('操作成功');
				            $('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
				        });
				}
			}
		}, {
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
	
});