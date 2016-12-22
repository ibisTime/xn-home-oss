$(function() {
	var code = getQueryString('code');
	var router = '/merchant/order';
//物流发货	
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
		title: '物流公司',
		field: 'logisticsCompany',
		type: 'select',
		formatter: Dict.getNameForList('wl_company'),
		key: 'wl_company',
		required: true
	}, {
		title: '物流单号',
		field: 'logisticsCode',
		maxlength: 32,
		required: true
	}, {
		title: '发货人',
		field: 'deliverer',
		required: true,
		maxlength: 32
	}, {
		title: '发货时间',
		field: 'deliveryDatetime',
		type: 'datetime',
		required: true
	}, {
		title: '物流单',
		field: 'pdf',
		type: 'img',
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255
	}];
	
	buildDetail(router, fields, code, {
		buttons: [{
			title: '确定',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
						data[el.id] = $(el).attr('src');
					});
					
//					var url = $("#basePath").val()+ '/merchant/order/logistics';
//					ajaxPost(url, data).then(function(res) {
//						if (res.success) {
//							alert("操作成功");
//							goBack();
//						}
//					});
					reqApi({
						code: "808054",
						json: {
							"code": selRecords[0].code,
							"orderCode":"logisticsCode",
						}
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