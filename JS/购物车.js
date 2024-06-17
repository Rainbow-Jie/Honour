$(function(){
    //全选、全不选
    $('#selectAll').click(function(){
        $('.selectItem').prop('checked',$(this).prop('checked'));
    });

    //当每一项被选中后，全选自动选中
    $('.selectItem').click(function(){
        var flag=true;
        $('.selectItem').each(function(idx,element){
            if(!$(element).prop('checked')){
                flag=false;                        
            }
        })
        $('#selectAll').prop('checked',flag);

        //计算总价
        calculateBus();
    })

    //+、-操作
    $('.item-num-op').click(function(){
        var input=$(this).siblings('input');
        if($(this).text()=="+"){                    
            input.val(parseInt(input.val())+1);
        }else{
            //弹框提示
            if(parseInt(input.val())>=1){
                input.val(parseInt(input.val())-1);
            }
        }

        //小计
        var num=parseInt(input.val());
        var price=parseInt($(this).parent().prev().children('.item-price').text());
        console.log(price,':',num);

        var itemTotal=$(this).parent().next().children('.item-total');
        itemTotal.text(num*price);

        //计算总价
        calculateBus();
    });


    //计算总价
    function calculateBus(){
        var totalPrice=0;
        //遍历所有项前的复选框
        $('.bus .bus-item .selectItem').each(function(idx,element){
            var isSelected=$(this).prop('checked');
            console.log(idx);
            if(isSelected){
                //计算该项的小计
                var busItem=$('.bus .bus-item:eq('+idx+')');
                //console.log(':',busItem.children('div:eq(5)').children('.item-total'));
                var itemTotal=busItem.children('div:eq(5)').children('.item-total').text();
                itemTotal=parseInt(itemTotal);
                totalPrice+=itemTotal;
            }
        })

        $('.bus .bus-footer .buy-total-price').text(totalPrice);
    }
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


 

    $('.hungBar_top').click(function () {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})

