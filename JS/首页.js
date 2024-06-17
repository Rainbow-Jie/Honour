$(function () {    
    // 轮播图的自动播放效果
    window.onload = function () {  
        var idx = 0;
    // 轮播图的选择空白框选项跳转动画
    $('.middle-key>span').mouseenter(function () {

        var idx = $(this).index();
        var div = $('.start>ul>li:eq(' + idx + ')');
        div.css('display', 'block');
        div.siblings('li').css('display', 'none');
    });
        setInterval(function () {
            if (idx <= 5) {
                var div = $('.start>ul>li:eq(' + idx + ')');
                div.css('display', 'block');
                div.siblings('li').css('display', 'none');
                idx++;
            } else {
                idx = 0;
            }
        }, 5000);
    };
// 限时购倒计时设置
    setInterval(function(){
        var timeing=new Date();
        var time=new Date("2022-9-17 0:0:0");
        var num=time.getTime()-timeing.getTime();
        
        var hour=Math.floor(num / 1000 / 60 / 60 % 24);            
        var minute=Math.floor(num / 1000 / 60 % 60);
        var second=Math.floor(num / 1000 % 60);
         
        $('#hour').text(('0'+hour).slice(-2)) ;
        $('#minute').text(('0'+minute).slice(-2));
        $('#second').text(('0'+second).slice(-2));
        },1000);
    
// 限时购模块的切换
    $("#btn-next").click(function () {
        for(var idx=4;idx<8;idx++){
            var div = $('.time-board>ul>li:eq(' + idx + ')');
            div.css('display', 'block');
            
        }
        for(var idx1=0;idx1<4;idx1++){
            var div = $('.time-board>ul>li:eq(' + idx1 + ')');
            div.css('display', 'none');
        }     
    });
    $("#btn-prev").click(function () {
        for(var idx=4;idx<8;idx++){
            var div = $('.time-board>ul>li:eq(' + idx + ')');
            div.css('display', 'none');
            
        }
        for(var idx1=0;idx1<4;idx1++){
            var div = $('.time-board>ul>li:eq(' + idx1 + ')');
            div.css('display', 'block');
        }     
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
            $('#cart').mouseenter(function(){
                $('.line3').css('display','block');
            });
        
        
            $('.line3').mouseleave(function(){
                $('.line3').css('display','none');
            });
        


        $('.hungBar_top').click(function () {

            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

})

            // window.onload = function () {
        
            //     setInterval(function () {
        
            //         var list = ['荣耀70', '荣耀平板 V7 Pro', '荣耀6 SE', '荣耀Earbuds 3 Pro', '手表', '笔记本']
            //         var i = 0;
            //         if (i < list.length) {
            //             $('#hg1').val(list[i]);
            //             i++;
            //         }
            //         else {
            //             i = 0;
            //         }
            //     }, 3000);
        
            // }
        
            // $('#flip').mouseenter(function(){
            //     $("#panel").slideToggle("slow");
            //     });
        
        
        
           
        
        
         
    