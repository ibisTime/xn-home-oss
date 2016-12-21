$(function() {
	
	//showPermissionControl();
	
	//var router = '/std/intent';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'fromCompany',
		title : '意向单位',
		search: true
	},{
		field : 'fromPerson',
		title : '联系人'
	},{
    	field : 'fromContact',
		title : '联系方式'
    },{
    	field : 'content',
		title : '意向描述'
    },{
    	field: 'status',
    	title: '状态',
    	type: 'select',
    	formatter: Dict.getNameForList('intent_status'),
    	search: true,
    	key: 'intent_status'
    }, {
		field : 'remark',
		title : '备注'
	}];
    buildList({
        router: 'intent',
        columns: columns,
        pageCode: '806070',
        searchParams: {
            companyCode: getCompanyId(getUserId())
        }
    });
});

