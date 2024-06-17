$(function () {
    //页面加载完毕，让第一个选项卡被选中
    $('.tab>.tab-list>li:first').addClass('active');
    $('.tabs-content>.content-item:first').css('display', 'block');

    //当鼠标进入某个选项卡元素时候，给他添加类选择器.active
    $('.tab-list>li').click(function () {
        //当前选中的元素:this->DOM对象
        //$(this):JQuery对象
        //给当前选中元素添加类选择器.active
        $(this).addClass('active');
        //移除其他元素的类选择器.active
        $(this).siblings('li').removeClass('active');

        //获取当前选项卡所在的索引
        var idx = $(this).index();

        //找到选项卡对应的内容div并呈现
        var div = $('.tabs-content>.content-item:eq(' + idx + ')');
        div.css('display', 'block');
        //隐藏其他选项卡下的内容div
        div.siblings('div').css('display', 'none');
    });
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