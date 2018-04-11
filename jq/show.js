$(function(){
    $("#button1").click(function(){

        //生成标题行
        var total = conf.columns.length;
        var str="<tr>";
         for(var i=0;i<total;i++){
             var name=conf.columns[i].describe;
             str+="<th>"+name+"</th>";
        }
        str+="</tr>";

         //根据数据生成表
        var len=datas.length;
        for (var i=0;i<len;++i){
            var rowdata=datas[i];
            str+="<tr>";
            for(j=0;j<total;j++){
                var column=conf.columns[j];
                var data=rowdata[column.name];   //得到数据表中的属性名,根据名字调用format中方法
                var format=conf.format[column.name](data,rowdata);
                str+=format;
            }
            str+="</tr>";
        }

        $("#table1").html(str);
    })
})