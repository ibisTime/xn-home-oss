$(function(){

	
	var router = '/merchant/configure';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'cname',
		title : '参数名',
		search: true
	}, {
		field: 'cvalue',
		title: '数值'
	}, {
		field: 'remark',
		title: '备注',
	}];
	
	buildList({
			router:'configure', 
			columns:columns,
		    searchParams: {
			  companyCode: getCompanyId(getUserId())
		     }
	  }
	);
})