require(['jquery','handlebars'],function($,Handlebars){
    $.ajax({
        url:'/api/data?id=0',
        dataType:'json',
        success:function(data){
            console.log(data)
        },
        error:function(error){
            console.warn(error)
        }
    })
})