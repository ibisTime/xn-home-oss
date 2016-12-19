$(function() {
	
	var code = getQueryString('id');
	
	var tpl = '';
	var tpldata = {};
	
	var fields = [{
		field: 'fromSystemCode',
		type: 'hidden',
		value: getSystemId()
	}, {
		field: 'toSystemCode',
		type: 'hidden',
		value: getSystemId()
	}, {
		field: 'smsType',
		type: 'hidden',
		value: '1'
	},{
		title: '内容',
		field: 'templateId',
		type: 'select',
		listCode: '804062',
		params: {
			channelType: '3',
			pushType: '31',
			systemCode: getSystemId()
		},
		keyName: 'templateId',
		valueName: 'title',
		required: true,
		onChange: function(v, r) {
			tpl = r.content;
			tpldata.title = r.title;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
			//if(v == 'E1KoO96UdD5-xAuUDhEIktkQBDarcsRJxhljsDEOk3M'){
			if(r.content.indexOf("keyword1") != -1){
				$('#keyword1').parent().show();
				$('#keyword2').parent().show();
				$('#keyword3').parent().show();
				$('#keyword4').parent().show();
				$('#keyword5').parent().show();
				$('#date').parent().hide();
				$('#adCharge').parent().hide();
				$('#type').parent().hide();
				$('#cashBalance').parent().hide();
			//}else if(v == '2rB1FVWGvvqkL0uOnuTuMB2jhyn3e8sd_a2caRvXGyQ'){
			}else if(r.content.indexOf("adCharge") != -1){
				$('#date').parent().show();
				$('#adCharge').parent().show();
				$('#type').parent().show();
				$('#cashBalance').parent().show();
				$('#keyword1').parent().hide();
				$('#keyword2').parent().hide();
				$('#keyword3').parent().hide();
				$('#keyword4').parent().hide();
				$('#keyword5').parent().hide();
			}
		}
	}, {
		title: '问候语',
		field: 'first',
		required: true,
		maxlength: 100,
		onKeyup: function(v) {
			tpldata.first = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		}
	}, {
		title: '办理事项',
		field: 'keyword1',
		required: true,
		maxlength: 100,
		onKeyup: function(v) {
			tpldata.keyword1 = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '変动时间',
		field: 'date',
		required: true,
		maxlength: 100,
		type: 'datetime',
		onKeyup: function(v) {
			tpldata.date = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '审批部门',
		field: 'keyword2',
		required: true,
		maxlength: 100,
		onKeyup: function(v) {
			tpldata.keyword2 = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '変动金额',
		field: 'adCharge',
		required: true,
		maxlength: 100,
		formatter: moneyFormat,
		onKeyup: function(v) {
			tpldata.adCharge = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '办理进度',
		field: 'keyword3',
		required: true,
		maxlength: 100,
		onKeyup: function(v) {
			tpldata.keyword3 = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '変动类型',
		field: 'type',
		required: true,
		maxlength: 100,
		onKeyup: function(v) {
			tpldata.type = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '申请人',
		field: 'keyword4',
		required: true,
		maxlength: 100,
		onKeyup: function(v) {
			tpldata.keyword4 = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '账户余额',
		field: 'cashBalance',
		required: true,
		maxlength: 100,
		formatter: moneyFormat,
		onKeyup: function(v) {
			tpldata.cashBalance = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '申请时间',
		field: 'keyword5',
		required: true,
		maxlength: 100,
		type: 'datetime',
		onBlur: function(v) {
			tpldata.keyword5 = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		},
		hidden: true
	}, {
		title: '备注',
		field: 'remark',
		required: true,
		maxlength: 100,
		onKeyup: function(v) {
			tpldata.remark = v;
			$('#content').html('<b style="color: #000">' + tpldata.title + '</b><br/>' + tpl.temp(tpldata).replace(/\n/g,"<br/>"));
		}
	}, {
		title: '预览',
		field: 'content',
		readonly: true,
		value: ''
		
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		buttons: [{
			title: '确定',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
						data[el.id] = $(el).attr('src');
					});
					var smsContent = {};
					smsContent.first = $('#first').val();
					smsContent.keyword1 = $('#keyword1').val();
					smsContent.keyword2 = $('#keyword2').val();
					smsContent.keyword3 = $('#keyword3').val();
					smsContent.keyword4 = $('#keyword4').val();
					smsContent.keyword5 = $('#keyword5').val();
					smsContent.date = $('#date').val();
					smsContent.adCharge = $('#adCharge').val();
					smsContent.type = $('#type').val();
					smsContent.cashBalance = $('#cashBalance').val();
					smsContent.remark = $('#remark').val();
					data.smsContent = smsContent;
					
					reqApi({
						code: '804033',
						json: data
					}).then(function() {
						alert("操作成功");
						goBack();
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