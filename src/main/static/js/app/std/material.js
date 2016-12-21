$(function () {

    //showPermissionControl();

    //var router = '/std/material';
    var companyId = getCompanyId(getUserId());
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'title',
        title: '标题',
        search: true
    }, {
        field: 'kind',
        title: '种类',
        type: 'select',
        formatter: Dict.getNameForList('material_kind'),
        key: 'material_kind',
        search: true
    }, {
        field: 'menuCode',
        title: '隶属',
        type: 'select',
        //url: $('#basePath').val() + '/std/menu/list/company?companyCode=' + getCompanyId(getUserId()),
        listCode: '806051',
        params: {
            companyCode: companyId,
            type: '1'
        },
        search: true,
        keyName: 'code',
        valueName: 'name'
    }, {
        field: 'createTime',
        title: '上传时间',
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];

    var searchParams = {
        companyCode: getCompanyId(getUserId())
    };

    if (companyId == 0) {
        searchParams.menuCode = 0;
    }
    buildList({
        router: 'material',
        columns: columns,
        pageCode: '806110',
        searchParams: searchParams
    });
    //buildList(router, columns, options);
});

