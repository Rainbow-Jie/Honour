$(function () {
    $('.shouhuo').click(function () {
        $('.adress1-1').css('display', 'block');
        //定义一个省份的数组
        var provinceArray = ["安徽省", "河南省", "江苏省", "北京市"];
        var cityArray = [["淮北", "亳州", "合肥", "宿州", "六安"], ["郑州", "商丘", "洛阳", "周口"], ["南京", "无锡"], ["北京"]];

        $(function () {
      
            for (var i = 0; i < provinceArray.length; i++) {
                $('#provinces').append($('<option value="' + provinceArray[i] + '">' + provinceArray[i] + '</option>'));
            }

          
        
            //</select>
            $('#provinces').change(function () {
                //获取选中的option的索引
                var idx = $('#provinces>option:selected').index();
                console.log('选中了:' + idx);
                console.log('该省份下的城市：', cityArray[idx]);

               
                $('#cities').remove();
                
                //生成节点:<select name="cities" id="cities"></select>               
                var cities = $('<select name="cities" id="cities"></select>');
                for (var i = 0; i < cityArray[idx].length; i++) {
                    cities.append($('<option value="' + cityArray[idx][i] + '">' + cityArray[idx][i] + '</option>'));
                }

                cities.insertAfter($('#provinces'));

            });

        });
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

});