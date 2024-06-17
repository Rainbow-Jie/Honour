$(function(){
    $('.pro-cate-range').mouseenter(function(){
        $('.button-range-price').css('display','block');
    });
    $('.pro-cate-range').mouseleave(function(){
        $('.button-range-price').css('display','none');
    });
    $('.range-price').click(function(){
        $('input').css('border','0');
    });
    //单一类别选择
    //类别、服务优惠、屏幕尺寸
    $('.selected').click(function(){
        $(this).children('a').addClass('active');
        $(this).siblings('.selected').children('a').removeClass('active'); 
        });
    //更多选择
    $('.pulldown-con li').click(function(){
        $(this).children('a').addClass('selected');
        $(this).siblings('.pulldown-con li').children('a').removeClass('selected');
    });
    //排序
    $('.pro-cate-area .p-expand li').click(function(){
        $(this).children('a').addClass('selected');
        $(this).siblings('.pro-cate-area .p-expand li').children('a').removeClass('selected');
    });
    //索引商品
    $(function(){
        $('#serverOffers ul li').click(function(){
            var idx=$(this).index();
            if(idx==0){
                $('#block').css('display','none');
                $('#none1').css('display','block');
            }else if(idx==1){
                $('#none1').css('display','none');
                $('#none2').css('display','block');
            }else if(idx==2){
                $('#none2').css('display','none');
                $('#none3').css('display','block');
            }else if(idx==3){
                $('#none3').css('display','none');
                $('#block').css('display','block');
            }
        });
    });

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
});
