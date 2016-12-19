$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '接收者名称',
		search: true
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'news_status',
		formatter: Dict.getNameForList('news_status'),
		search: true
	},{
    	field : 'pushedDatetime',
		title : '发送时间',
		formatter: dateTimeFormat
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'aurora',
		columns: columns,
		pageCode: '804040',
		searchParams: {
			channelType: '2',
			pushType: '21'
		}
	});
	
	$('#pubBtn').click(function() {	
		window.location.href = "pubAur.html";
	});
	
	$('#pubsBtn').click(function() {	
		window.location.href = "pubAurs.html";
	});
});

