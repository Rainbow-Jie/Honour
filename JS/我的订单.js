$(function(){

    //  订单状态的鼠标显示颜色特效
    $('.but').mouseenter(function () {
        $(this).css({ 'backgroundColor': 'rgb(244, 103, 103)', 'color': '#fff' });
        // $('this ~ .but').css({ 'backgroundColor': 'rgba(255, 255, 255, 0.712)', 'color': 'rgb(106, 154, 236)' });
    })

    $('.but').mouseleave(function () {
        $(this).css({ 'backgroundColor': 'rgba(255, 255, 255, 0.712)', 'color': 'rgb(106, 154, 236)' });
    })

    // 时间显示订单分类的转换
    $('.move1').mouseenter(function(){
        var div=$('.title-r>ul>li:eq('+ 0 +')>a');
    div.css({'border-bottom':'none','color':'#888'});
    })

    $('.move1').mouseleave(function(){
        var div=$('.title-r>ul>li:eq('+ 0 +')>a');
    div.css({'border-bottom':'1px solid #3a3a3a','color':'#333'});
    })


// 首页、尾页颜色
    $('.f-e').mouseenter(function(){
        $(this).css({'backgroundColor':'rgb(150, 103, 103)','color':'#fff'});
    })
    $('.f-e').mouseleave(function(){
        $(this).css({'backgroundColor':'#DEDEDE','color':'#333'});
    })


    // 导航栏
    $(window).scroll(function () {
        if ($(this).scrollTop() > 3) {

            $(".hungBar_top").addClass('active');
            $(".fixedbox-common").addClass('active');
        }
        else {
            $(".hungBar_top").removeClass('active');
            $('.fixedbox-common').removeClass('active');
        }
    })


    //         function () {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;};

    $('.hungBar_top').click(function () {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    $(function () {
        window.onload = function () {
    
            setInterval(function () {
    
                var list = ['荣耀70', '荣耀平板 V7 Pro', '荣耀6 SE', '荣耀Earbuds 3 Pro', '手表', '笔记本']
                var i = 0;
                if (i < list.length) {
                    $('#hg1').val(list[i]);
                    i++;
                }
                else {
                    i = 0;
                }
            }, 3000);
    
        }
    
        $('#flip').mouseenter(function(){
            $("#panel").slideToggle("slow");
            });
    
    
    
        $('#cart').mouseenter(function(){
            $('.line3').css('display','block');
        });
    
    
        $('.line3').mouseleave(function(){
            $('.line3').css('display','none');
        });
    });

})