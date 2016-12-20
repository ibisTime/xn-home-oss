$(function() {
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '全名',
		search: true
	},{
		field : 'abbrName',
		title : '简称'
	},{
		field : 'domain',
		title : '域名'
    },{
		field: 'userId',
		title: '公司账号',
		type: 'select',
		//url: $('#basePath').val() + '/user/list',
        listCode: '805055',
		keyName: 'userId',
		valueName: 'loginName'
	}, {
		field: 'location',
		title: '状态',
		formatter: Dict.getNameForList('cmp_location'),
		key: 'cmp_location',
		type: 'select',
		search: true
	}];
	buildList({
        router: 'company',
        columns: columns,
        pageCode: '806014',
		//rockCode: '806002',
		// urlParams: {
        	// b: 1
		// }
    });
    $('#rockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if(selRecords.length <= 0){
            alert("请选择记录");
            return;
        }
        if(!confirm("确认是否注销该记录？")){
            return false;
        }
        var codeParams = {code:selRecords[0].code};
        var data = codeParams;

        reqApi({
            code: "806002",
            json: data
        }).done(function(data) {
            alert('操作成功');
            $('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
        });
    });
});