require(['jquery'],function($){
    var key = $('.nav-list li').eq(0).text();
    getData(key);
    $('.nav-list').on('click','li',function(){
        var key = $(this).text();
        getData(key);
    })
    function getData(key){
        $.ajax({
            url:'/api/classify?key=' + key,
            dataType:'json',
            success:function(res){
                console.log(res)
            },
            error:function(error){
                console.warn(error)
            }
        })
    }
})