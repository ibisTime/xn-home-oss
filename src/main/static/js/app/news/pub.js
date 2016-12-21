$(function() {
	
	var code = getQueryString('id');
    var pushData = [], dictList = [];
    reqApi({
        code: "807706",
        json: {
            parentKey: "push_type"
		},
        sync: true
    }).done(function (data) {
        dictList = data;
    });
    reqApi({
        code: "804006",
        json: {
            channelType: "1",
            status: "1"
        },
        sync: true
    }).done(function (data) {
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < dictList.length; j++){
                if(data[i].pushType == dictList[j].dkey){
                    pushData.push({
                        pushType: data[i].pushType,
                        name: dictList[j].dvalue
                    });
                    break;
                }
            }
        }
    });

	var fields = [{
		field: 'fromSystemCode',
		type: 'hidden',
		value: getSystemId()
	}, {
		field: 'toSystemCode',
		type: 'hidden',
		value: getSystemId()
	}, {
		field: 'pushType',
		type: 'hidden',
		value: '12'
	}, {
		field: 'smsType',
		type: 'hidden',
		value: '1'
	}, {
		title: '接收者',
		field: 'toMobile',
		type: 'select',
		listCode: '804021',
		keyName: 'mobile',
		valueName: 'mobile',
		required: true
	}, {
        title: '发送渠道',
        field: 'pushType',
        compData: pushData,
        keyName: 'pushType',
        valueName: 'name',
        required: true,
        type: 'select'
    }, {
		title: '内容',
		field: 'smsContent',
		required: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '804042',
		buttons: [{
			title: '确定',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
						data[el.id] = $(el).attr('src');
					});
					reqApi({
						code: '804031',
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