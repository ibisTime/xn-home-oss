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
		//formatter: Dict.getNameForList('cmp_location'),
		key: 'cmp_location',
		type: 'select',
		search: true
	}];
	buildList({
        router: 'company',
        columns: columns,
        pageCode: '806014',
		rockCode: '806002'
    });
});