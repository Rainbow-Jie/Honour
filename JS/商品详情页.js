$(function(){
    //左侧商品图片鼠标进入
    $('.product-gallery-thumbs>ul>li').mouseenter(function(){
var idx = $(this).index();
if(idx==0){
    var obj=document.getElementById("item-pic");
    obj.src='https://hshop.honorfile.com/pimages//product/6936520809677/800_800_30C40EB00944C163CA796265DB8ED788EB93AD9C3CDB5C53mp.png';
}
else if(idx==1){
    var obj=document.getElementById("item-pic");
    obj.src='https://hshop.honorfile.com/pimages//product/6936520809677/group//800_800_5F7E7950E64759BEDCAF80B2999A2FAF459CCBCED4A2C64A.png';
}
else if(idx==2){
    var obj=document.getElementById("item-pic");
    obj.src='https://hshop.honorfile.com/pimages//product/6936520809677/group//800_800_7471E0D302A6EDB0F0F16B5D40F1A23B4B22EEEC717D3845.png';
}
else if(idx==3){
    var obj=document.getElementById("item-pic");
    obj.src='https://hshop.honorfile.com/pimages//product/6936520809677/group//800_800_3F64EBA3046D4BDE90AA5342249A66A602928A396FB4FFB9.png';
}
else if(idx==4){
    var obj=document.getElementById("item-pic");
    obj.src='https://hshop.honorfile.com/pimages//product/6936520809677/group//800_800_A040ED1C9B66BA2514C397BE497C132D78C7E9AD5B9E7019.png';
}       
})
   //商品颜色图片选择
   $('#colorPackage .product-choose-detail li').mouseenter(function(){
            var idx=$(this).index();
            if(idx==0){
                var obj=document.getElementById('item-pic');
                obj.src="https://hshop.honorfile.com/pimages//product/6936520809646/800_800_6B8F45C77784AE4AA5A3FAD901D1CA50845785C1B6F8D69Dmp.png"
            }
            else if(idx==1){
                var obj=document.getElementById('item-pic');
                obj.src="https://hshop.honorfile.com/pimages//product/6936520809653/800_800_579FB6376A93F0A41C6D3D5324352F28D7021BC044B46BCDmp.png"
            }
            else if(idx==2){
                var obj=document.getElementById('item-pic');
                obj.src="https://hshop.honorfile.com/pimages//product/6936520809660/800_800_C4F015FD63ABB6DF81D82F843C9958FE1EBDB3951B2C710Amp.png"
            }
            else if(idx==3){
                var obj=document.getElementById('item-pic');
                obj.src="https://hshop.honorfile.com/pimages//product/6936520809677/800_800_30C40EB00944C163CA796265DB8ED788EB93AD9C3CDB5C53mp.png"
            }
    });
    //头标题滚动固定位置
    $(window).scroll(function(){
            console.log($(this).scrollTop());
            if($(this).scrollTop()>720){
               $('.product-tab').addClass('active');
            }else{
                $('.product-tab').removeClass('active');
            }
        });
    //头标题点击添加样式   
        $('.product-tab>p>a:first').addClass('selected');
        $('.product-tab>p>a').click(function(){
            $(this).addClass('selected');
            $(this).siblings('#pro-tab').removeClass('selected');
        });
    //产品颜色选择
        $('#colorPackage a:first').addClass('selected');
        $('#colorPackage li').click(function(){
            $(this).children('.sku').children('a').addClass('selected');
            $(this).siblings('#colorPackage li').children('.sku').children('a').removeClass('selected');
        });   
    //产品型号选择        
        $('#editionPackage a:first').addClass('selected');
        $('#bundlePackage a:first').addClass('selected');
        $('#editionPackage li').click(function(){
            $(this).children('.sku').children('a').addClass('selected');
            $(this).siblings('#editionPackage li').children('.sku').children('a').removeClass('selected');
        });
    //商品推荐头部点击变身
        $('.productAll .product-recommend li a:first').addClass('click');
        $('.productAll .product-recommend li').click(function(){
            $(this).children('a').addClass('click');
            $(this).siblings('.productAll .product-recommend li').children('a').removeClass('click');
        });
    //商品推荐点击更换商品
    $('.productAll .product-recommend .curren').click(function(){
        $('.recommend-rolling').css('display','block');
        $('.other-goods-rolling').css('display','none');
    });
    $('.productAll .product-recommend .feature').click(function(){
        $('.recommend-rolling').css('display','none');
        $('.other-goods-rolling').css('display','block');
    });
    //保障服务点击
    $('.product-service:first').addClass('click');
    $('.product-service').click(function(){
        $(this).addClass('click');
        $(this).siblings('.product-service').removeClass('click');
    });
    //分期免息
    $('.prd-noInterset li a:first').addClass('click');
    $('.prd-noInterset li').click(function(){
        $(this).children('.sku').children('a').addClass('click');
        $(this).siblings('.prd-noInterset li').children('.sku').children('a').removeClass('click');
    });
}); 