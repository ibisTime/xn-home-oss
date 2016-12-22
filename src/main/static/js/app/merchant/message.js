$(function(){
	
	var router = '/merchant/message';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'title',
		title : '标题',
		search: true
	},{
		field : 'type',
		title : '类型',
		type: 'select',
		data: {'1':'公告', '4': '短信'},
		search: true
	},{
    	field: 'status',
    	title: '状态',
    	data: {'0':'待发布','1':'已发布'},
    	type: 'select',
    	search: true
    },{
    	field : 'updater',
		title : '发布人'
    },{
		field : 'updateDatetime',
		title : '发布时间',
		formatter: dateTimeFormat
	}, {
		field: 'remark',
		title: '备注'
	}];
	buildList({
		router:"message", 
		columns:columns, 
		searchParams: {
			companyCode: getCompanyId(getUserId())
		}
	});
	
	$('#releaseBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords[0].status == 1){
			alert("该公告已发布！");
			return;
		}
//		var url = $("#basePath").val()+ '/merchant/message/release';
//		ajaxPost(url, {"code": selRecords[0].code}).then(function(res) {
//			if (res.success) {
//				alert("操作成功");
//				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
//			}
//		});
		reqApi({
			code: "805123",
			json: {
				"code": selRecords[0].code,
			}
		}).done(function(data) {
			alert("操作成功");
			$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
		});
		
		
		
	});
})