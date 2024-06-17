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



 
 

