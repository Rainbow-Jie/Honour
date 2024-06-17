$(function(){
    $('.ding').click (function(){
 
 $('.ding-box-7-1').css('display','block');
 $('.ding').css('display','none');

  });
})
//定义一个省份的数组
var provinceArray=["江苏省","安徽省","浙江省","上海直辖市"];
var cityArray=[["无锡","苏州","南京","镇江","常州"],["淮北","合肥","亳州","宿州"],["宁波","杭州"],["上海"]];

$(function(){
 
    for(var i=0;i<provinceArray.length;i++){
        $('#provinces').append($('<option value="'+provinceArray[i]+'">'+provinceArray[i]+'</option>'));
    }

    $('#provinces').change(function(){
    
        var idx=$('#provinces>option:selected').index();
        console.log('选中了:'+idx);
        console.log('该省份下的城市：',cityArray[idx]);

     
        $('#cities').remove();
               
        var cities=$('<select name="cities" id="cities"></select>');
        for(var i=0;i<cityArray[idx].length;i++){
            cities.append($('<option value="'+cityArray[idx][i]+'">'+cityArray[idx][i]+'</option>'));
        }

        cities.insertAfter($('#provinces'));

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






})