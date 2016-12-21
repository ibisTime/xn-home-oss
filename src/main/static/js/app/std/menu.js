$(function() {
	
	//showPermissionControl();
	
	var isBranch = getQueryString('b') || '';
	
	//var router = '/std/menu';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名称',
		search: true
	},{
		field : 'location',
		title : '位置',
		type: 'select',
		key: 'menu_location',
		formatter: Dict.getNameForList('menu_location'),
		search: true
    }, {
		field : 'parentCode',
		title : '父菜单',
		type: 'select',
		//url: $('#basePath').val() + '/std/menu/list?parentCode=0',
		listCode: "806052",
		params: {
            parentCode: "0",
            type: "1"
		},
		keyName: 'code',
		valueName: 'name'
		
    }, {
		field : 'orderNo',
		title : '顺序'
	},{
    	field : 'contentType',
		title : '内容格式',
		formatter: function(v) {
			if (v == 'list') {
				return '<i class="zmdi zmdi-view-list-alt zmdi-hc-fw"></i>多条列表';
			} else if (v == 'ele') {
				return '<i class="zmdi zmdi-apps zmdi-hc-fw"></i>单条详情';
			}
		}
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
    	field: 'remark',
    	title: '备注'
    }];
	// buildList(router, columns, {
	// 	searchParams: {
	// 		companyCode: getCompanyId(getUserId())
	// 	},
	// 	urlParams: {
	// 		b: isBranch
	// 	}
	// });
    buildList({
        router: 'menu',
        columns: columns,
        pageCode: '806050',
        searchParams: {
            companyCode: getCompanyId(getUserId()),
			type: 1
        },
        urlParams: {
            b: isBranch
        }
    });
	$('#updownBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
        reqApi({
            code: "806044",
            json: {
            	code: selRecords[0].code
            }
        }).done(function(data) {
            alert('操作成功');
            $('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
        });
	});
});

