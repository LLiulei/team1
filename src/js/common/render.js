define(['jquery','handlebars'],function($,handlebars){
    var render = function(tpl,target,data){
        // 第一步
        var source = $(tpl).html();
        // 第二步
        var template = handlebars.compile(source);
        // 第三步
        var html = template(data);
        $(target).html(html);
    }
    return render;
})