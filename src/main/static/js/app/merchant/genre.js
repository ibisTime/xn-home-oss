$(function(){
	var router = '/merchant/genre';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '类别名称',
		search: true
	}, {
		field: 'parentCode',
		title: '大类',
		//url: $('#basePath').val() + '/merchant/genre/list?parentCode=0&companyCode=' + getCompanyId(getUserId()),
		listCode:'808006',
		params:{
			type:"1",
			parentCode:"0",
			companyCode:getCompanyId(getUserId()),
		},
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		search: true
	}, {
		field: 'orderNo',
		title: '次序',
		sortable: true
	}];
	buildList({
		router:"genre",
		columns:columns,
		pageCode:'808005',
		type:'1',
		sortName: 'orderNo',
		sortOrder: 'asc',
		searchParams: {
			companyCode: getCompanyId(getUserId()),
		}
	});
})