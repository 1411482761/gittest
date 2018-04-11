const conf =
    {
        tablename: "products",
       // templateUrl: "view1/view1.html",
        columns: [
            {name:"id",describe:"id",type: "number"},
            {name:"num",describe:"商品款号",type:"string"},
            {name:"quality",describe:"质量",type:"string"},
            {name:"element",describe:"成分",type:"string"},
            {name:"width",describe:"宽度",type:"string"},
            {name:"count",describe:"数量",type:"string"},
            {name:"code",describe:"唯一码",type:"string"},
            {name:"pic",describe:"图片",type:"string"},
            {name:"pic1",describe:"图1",type:"string"},
            {name: "pic2", describe: "图2", type: "string"},
        ],
        format:{
            'id':function(data,rowdata){
                var str='<td><a target="_blank" href="http://www.baidu.com?id='+data+'">'+data+'</a></td>';
                return str;
            },
            'num':function(data,rowdata){
                return '<td>'+data+'</td>';
            },
            'quality':function(data,rowdata){
                return '<td>'+data+'</td>';
            },
            'element':function(data,rowdata){
                return '<td>'+data+'</td>';
            },
            'width':function(data,rowdata){
                return '<td>'+data+'</td>';
            },
            'count':function(data,rowdata){
                return '<td>'+data+'</td>';
            },
            'code':function(data,rowdata){
                return '<td>'+data+'</td>';
            },
            'pic':function(data){
                var str='<td><img src="'+data+'"></td>';
                return str;
            },
            'pic1':function(data){
                var str='<td><img src="'+data+'"></td>';
                return str;
            },
            'pic2':function(data){
                var str='<td><img src="'+data+'"></td>';
                return str;
            }
        }
    };