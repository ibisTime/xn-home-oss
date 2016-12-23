$(function(){

	var router = '/merchant/ticket';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field: 'code',
		title: '单号'
	}, {
		field : 'scannerMobile',
		title : '使用者手机号',
		search: true
	}, {
		field: 'amount',
		title: '积分面值',
		formatter: moneyFormat
	}, {
		field: 'cnyPrice',
		title: '人民币价格',
		formatter: moneyFormat
	}, {
		field: 'status',
		title: '状态',
		search: true,
		type: 'select',
		formatter: Dict.getNameForList('ticket_status'),
		key: 'ticket_status'
	}];
	buildList({
		router:'ticket', 
		columns:columns,
		pageCode: '805330',
		searchParams: {
			companyCode: getCompanyId(getUserId())
		}
	});
	$('#discardBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		
		if(!confirm("确认作废该卡券？")){
    		return false;
    	}
//    	var url = $("#basePath").val()+ router + '/discard';
//    	var data = {code:selRecords[0].code};
//		ajaxPost(url, data).then(function(res) {
//			if (res.success) {
//				alert('操作成功');
//				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
//			}
//		});
		reqApi({
			code: "805322",
			json: {
				"code": selRecords[0].code,
				"couponCode":"code",
			}
		}).done(function(data) {
			alert("操作成功");
			$('#tableList').bootstrapTable('refresh',{url:$('#tableList').bootstrapTable('getOptions').url});
		});
	});
	
	var qrcode = new QRCode('qrcode');
	function savePic(code) {
	    var img = $("#qrcode").find('img')[0];
	    var alink = document.createElement("a");
	    alink.href = img.src;
	    alink.download = code + ".jpg";
	    alink.click();
	}
	$('#qrcodeBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		var code = selRecords[0].code;
		qrcode.clear();
		qrcode.makeCode(selRecords[0].domain + '/m/operator/recharge.html?c=' + code);
		setTimeout(function() {
			savePic(code);
		}, 1);
	});
})