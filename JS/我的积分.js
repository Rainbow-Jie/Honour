$(function () {
    $('.comon1').css('display', 'none');
    $('.comon2').css('display', 'none');
    $('#jifen').click(function () {
        console.log("hello");
        $('.comon').css('display', 'block');
        $('.comon1').css('display', 'none');
        $('.comon2').css('display', 'none');
    })
    $('#question').click(function () {
        $('.comon').css('display', 'none');
        $('.comon1').css('display', 'block');
        $('.comon2').css('display', 'none');
    })
    $('#jflist').click(function () {
        $('.comon').css('display', 'none');
        $('.comon1').css('display', 'none');
        $('.comon2').css('display', 'block');
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