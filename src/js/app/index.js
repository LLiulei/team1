require(['jquery','render'],function($,render){
    // 实现左侧列表
    $.ajax({
        url:'/api/navlist',
        dataType:'json',
        success:function(res){
            console.log(res)
            if(res.code === 1){
                render('#nav-tpl','.nav-list',res.data);
                var key = $('.nav-list li').eq(0).text();
                getData(key);
            }
        },
        error:function(error){
            console.warn(error)
        }
    })
    // 点击样式 切换内容
    $('.nav-list').on('click','li',function(){
        var key = $(this).text();
        $(this).find('a').addClass('active').parent('li').siblings().find('a').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        getData(key);
    })
    // 右侧列表数据
    function getData(key){
        $.ajax({
            url:'/api/classify?key=' + key,
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code === 1){
                    render('#data-tpl','.list-data',res.data[0]);
                }
            },
            error:function(error){
                console.warn(error)
            }
        })
    }
})