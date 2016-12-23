$(function() {
	var code = getQueryString('code');
	var router = '/merchant/order';
//快递异常	
	var fields = [{
		title: '订单编号',
		field: 'code1',
		'[value]': 'code',
		readonly: true
	}, {
		title: '订单总额',
		field: 'amount',
		amount: true,
		readonly: true,
		formatter: function(v, r) {
			return moneyFormat(+v + +r.yunfei);
		}
	}, {
		title: '下单用户',
		field: 'mobile',
		readonly: true
	}, {
		title: '下单说明',
		field: 'applyNote',
		readonly: true
	}, {
		title: '下单时间',
		field: 'applyDatetime',
		formatter: dateTimeFormat,
		readonly: true
	}, {
		title: '状态',
		field: 'status',
		type: 'select',
		formatter: Dict.getNameForList('order_status'),
		key: 'order_status',
		readonly: true
	}, {
		title: '商品列表',
		field: 'productOrderList',
		type: 'o2m',
		readonly: true,
		columns: [{
			title: '名称',
			field: 'productName'
		}, {
			title: '数量',
			field: 'quantity'
		}, {
			title: '零售价',
			field: 'salePrice',
			formatter: moneyFormat
		}]
	}, {
		title: '异常原因',
		field: 'remark',
		required: true,
		maxlength: 255
	}];
	
	buildDetail({
				router:"order",
				fields:fields,
				code:code,
				// refundCode:"808056",
				// pageCode:"808070",
				// listCode:"808071",
				detailCode:"808072",
				// logisticsCode:"808054",
				// siteCode:"808055",
				// sureCode:'808057',
				// abnormalCode:"808056"
				searchParams: {
					//orderCode: logisticsCode,
		        },
		        //view: view,
				buttons: [{
					title: '确定',
					handler: function() {
						if ($('#jsForm').valid()) {
							var data = $('#jsForm').serializeObject();
							$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
								data[el.id] = $(el).attr('src');
							});
//					var url = $("#basePath").val()+ '/merchant/order/abnormal';
//					ajaxPost(url, data).then(function(res) {
//						if (res.success) {
//							alert("操作成功");
//							goBack();
//						}
//					});
					reqApi({
						code: "808056",
						json: data
					}).done(function(data) {
						alert("操作成功");
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