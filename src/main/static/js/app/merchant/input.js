$(function(){
	var companyCode = getCompanyId(getUserId());
	var router = '/merchant/input';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '商品名称',
		search: true
	}, {
		field: 'category',
		title: '大类',
		//url: $('#basePath').val() + '/merchant/genre/list?parentCode=0&companyCode=' + companyCode,
		listCode:"808006",
		params:{
			type:'1',
		    companyCode:companyCode,
		    parentCode:"0",
		},
		
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		search: true
	}, {
		field: 'type',
		title: '小类',
		//url: $('#basePath').val() + '/merchant/genre/list?companyCode=' + companyCode,
		listCode:"808006",
		params:{
			type:'1',
		    companyCode:companyCode,
		},
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		noRender: true,
		search: true
	}, {
		field : 'quantity',
		title : '库存',
    }, {
    	field : 'costPrice',
    	title : '进货价',
    	formatter: moneyFormat
    }, {
    	field : 'status',
    	title : '状态',
    	search : true,
    	type : 'select',
    	formatter: Dict.getNameForList('product_status'),
    	key: 'product_status'
    }, {
    	field : 'price1',
    	title : '售价',
    	formatter: moneyFormat
    }, {
    	field : 'price2',
    	title : '折扣价',
    	formatter : moneyFormat
    }, {
    	field : 'location',
    	title : '位置',
    	search : true,
    	type : 'select',
    	//url: $('#basePath').val() + '/merchant/position/list?companyCode=' + companyCode,
		listCode:"808006",
    	params:{
    			companyCode:companyCode,
    			type:"2",
    		},
         keyName: 'code',
		 valueName: 'name',
		 defaultOption: '普通'
    }, {
    	field: 'remark',
    	title: '备注'
    }];
	buildList({
		router: 'input',
        columns: columns,
        pageCode: '808020',
		searchParams: {
			companyCode:companyCode,
		},
		beforeEdit: function(record) {
			if (record.status == 1) {
				alert("该产品已上架");
				return false;
			} else {
				return true;
			}
		}
	});
	
	$('#putBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords[0].status == 1){
			alert("该产品已上架");
			return;
		}
		window.location.href = "./put.html?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
	
	$('#pullBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if((selRecords[0].status == 0) || (selRecords[0].status == 2)){
			alert("该产品未上架");
			return;
		}
		
		reqApi({
			code: "808014",
			json: {
				"code": selRecords[0].code,
				"remark": "10"
			}
		}).done(function(data) {
			alert("操作成功");
			$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
		});
	});
	
	$('#delete1Btn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		
		else if(selRecords.length >= 2){
			alert("请选择一条记录");
			return;
		}
		
		if(!confirm("确认是否删除该记录？")){
    		return false;
    	}
		
		if(selRecords[0].status == 1){
			alert("该商品正在上架中，不可删除");
			return;
		}
		if(selRecords[0].status == 2){
			alert("该商品已上架过，不可删除");
			return;
		}
//    	var url = $("#basePath").val()+ router + '/delete';
//    	var data = {code:selRecords[0].code};
//		ajaxPost(url, data).then(function(res) {
//			if (res.success) {
//				alert('操作成功');
//				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
//			}
//		});
	        reqApi({
				code: "808011",
				json: {
					"code": selRecords[0].code,
				}
			}).done(function(data) {
				alert("操作成功");
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			});
	        
	        
	        
	        
	});
	
	$('#category').on('change', function() {
		var v = $(this).val();
		if (v) {
			$('#type').renderDropdown({
				//url: $('#basePath').val() + '/merchant/genre/list?companyCode=' + companyCode + '&parentCode=' + v,
				listCode:'808006',
				params:{
//					companyCode:companyCode,
					parentCode:v,
					type:'1',
				},
				keyName: 'code',
				valueName: 'name'
			});
		} else {
			$('#type').html('<option value=""></option>');
		}
		
	});
})