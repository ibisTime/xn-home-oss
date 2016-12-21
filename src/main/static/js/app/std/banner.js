$(function() {
	
	//showPermissionControl();
	
	var isBranch = getQueryString('b') || '';
	
	//var router = '/std/banner';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名字',
		search: true
	},{
		field : 'location',
		title : '位置',
		type: 'select',
		key: 'banner_location',
		formatter: Dict.getNameForList('banner_location'),
		search: true
	},{
    	field : 'orderNo',
		title : '顺序'
    },{
    	field: 'belong',
    	title: '属于',
    	formatter: function(v, r) {
    		if (v == 1) {
    			return '全局';
    		} else if (v == 2) {
    			return '地方默认';
    		} else {
    			return '公司私有';
    		}
    	}
    }, {
    	field : 'companyCode',
		title : '所属公司',
		type: 'select',
		//url: $('#basePath').val() + '/general/company/list',
		listCode: '806013',
		keyName: 'code',
		valueName: 'name'
    },{
		field : 'remark',
		title : '备注'
	}];
    buildList({
        router: 'banner',
        columns: columns,
        pageCode: '806050',
        searchParams: {
            companyCode: getCompanyId(getUserId()),
            type: 2
        },
        urlParams: {
            b: isBranch
        }
    });
});