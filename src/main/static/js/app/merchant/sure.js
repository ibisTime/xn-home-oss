$(function() {
	
	var code = getQueryString('code');
	var router = '/merchant/order';
//确认收货	
	var fields = [{
		title: '订单编号',
		field: 'code1',
		'[value]': 'code',
		readonly: true
	}, {
		title: '订单总额',
		field: 'amount',
		formatter: function(v, r) {
			return moneyFormat(+v + +r.yunfei);
		},
		readonly: true
	}, {
		title: '下单用户',
		field: 'mobile',
		readonly: true
	},  {
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
		title: '备注',
		field: 'remark',
		maxlength: 255,
		required: true
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
//					var url = $("#basePath").val()+ '/merchant/order/sure';
//					ajaxPost(url, data).then(function(res) {
//						if (res.success) {
//							alert("操作成功");
//							goBack();
//						}
//					});
					reqApi({
						code: "808057",
						json: data,
					}).done(function(data) {
						alert("操作成功");
						$('#tableList').bootstrapTable('refresh',{url:$('#tableList').bootstrapTable('getOptions').url});
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