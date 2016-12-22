$(function(){
	var userId = getUserId();
	var router = '/merchant/memQuery';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'loginName',
		title : '用户名',
		search: true
	}, {
		field : 'mobile',
		title : '手机号',
		search: true
	}, {
		field: 'status',
		title: '状态',
		search: true,
		type : 'select',
		data: {'0':'正常','2':'冻结'}
	}, {
		field: 'updateDatetime',
		title: '注册时间',
		formatter: dateTimeFormat
	}, {
    	field : 'amount',
    	title : '积分余额',
    	amount: true
    }, {
    	field: 'remark',
    	title: '备注'
    }];
	buildList({
		router:"memQuery",
		columns:columns,
		searchParams: {
			companyCode: getCompanyId(getUserId())
		}
	});
	
	$('#freeze-upBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords[0].status == 1){
			alert("该会员已被冻结");
			return;
		}
		if(!confirm("确认是否冻结该会员？")){
    		return false;
    	}
//		var url = $("#basePath").val()+ '/merchant/memQuery/freeze-up';
//		ajaxPost(url, {"userId": selRecords[0].userId}).then(function(res) {
//			if (res.success) {
//				alert("操作成功");
//				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
//			}
//		});
		reqApi({
			code: "805052",
			json: {
				"userId": selRecords[0].userId,
				"toStatus": "2"
			}
		}).done(function(data) {
			alert("操作成功");
			$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
		});
	});
	
	$('#freeze-downBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords[0].status == 0){
			alert("该会员已被激活");
			return;
		}
		if(!confirm("确认是否激活该会员？")){
    		return false;
    	}
//		var url = $("#basePath").val()+ '/merchant/memQuery/freeze-down';
//		ajaxPost(url, {"userId": selRecords[0].userId}).then(function(res) {
//			if (res.success) {
//				alert("操作成功");
//				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
//			}
//		});
		reqApi({
			code: "805052",
			json: {
				"userId": selRecords[0].userId,
				"toStatus":"0"
			}
		}).done(function(data) {
			alert("操作成功");
			$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
		});
		
	});
	
	$('#integralBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href ="./integral.html?userId="+selRecords[0].userId;
	});
})