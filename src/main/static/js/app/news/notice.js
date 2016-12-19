$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'smsTitle',
		title : '公告标题'
	},{
		field : 'toKind',
		title : '针对人群',
		type: 'select',
		key: 'toKind',
		formatter: Dict.getNameForList('toKind')
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'notice_status',
		formatter: Dict.getNameForList('notice_status'),
		search: true
	},{
		field : 'updater',
		title : '最近修改人'
	},{
    	field : 'updateDatetime',
		title : '最近操作时间',
		formatter: dateTimeFormat
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'notice',
		columns: columns,
		pageCode: '804040',
		searchParams: {
			pushType: '41',
			channelType: '4'
		}
	});
	
	$('#pubBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords[0].status == 2){
			alert("该公告已过期");
			return;
		}
		
		if(selRecords[0].status == 1){
			alert("该公告正在使用中");
			return;
		}
		
		if(!confirm("确认发布该公告？")){
    		return false;
    	}
		reqApi({
			code: '804036',
			json: {"id": selRecords[0].id}
		}).then(function() {
			alert("操作成功");
			$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
		});
	});
	
	$('#pullBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords[0].status == 2){
			alert("该公告已过期");
			return;
		}
		
		if(selRecords[0].status == 0){
			alert("该公告还未发布");
			return;
		}
		
		if(!confirm("确认撤下该公告？")){
    		return false;
    	}
		reqApi({
			code: '804036',
			json: {"id": selRecords[0].id}
		}).then(function() {
			alert("操作成功");
			$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
		});
	});
});

