$(function () {

    var i = 2;
    //当鼠标进入某个选项卡元素时候，
    $('.span1').click(function () {

        if (i % 2 != 0) {
            $('.change').css('display', 'none');
            $('.Change').css('display', 'block');
            i++;
        }
        else {
            $('.Change').css('display', 'none');
            $('.change').css('display', 'block');
            i++;
        }

    });

    $('.texteyeoff').click(function () {

        $('.texteyeoff').css('display', 'none');
        $('.texteyeon').css('display', 'block');
        document.getElementById('passWord').type = 'text';
    });


    $('.texteyeon').click(function () {
        $('.texteyeon').css('display', 'none');
        $('.texteyeoff').css('display', 'block');
        document.getElementById('passWord').type = 'password';
    });

    window.onload = function () {
        var nScrollHight = document.getElementById("divContent").offsetHeight; //滚动距离总长(注意不是滚动条的长度)
        var nScrollTop = 0;   //滚动到的当前位置
        var nDivHight = document.getElementById("divContainer").offsetHeight; //divContainer的高度

        document.getElementById("divContainer").onscroll = function () {
            nScrollTop = this.scrollTop;//0~250;
            nScrollHight = this.scrollHeight;//750,1000;
            if (nScrollTop + nDivHight >= nScrollHight) {
                document.getElementById("divContent").style.height = 1000;
                alert("Scroll to Bottom, ScrollTop is:" + nScrollTop);
            }
        }
    }
    var j = 0;
    $('.input-left').click(function () {
        if (j % 2 == 0) {
            $('.insidebox').css('display', 'block');

            j++;
        }
        else {
            $('.insidebox').addClass('active');
            j++;
        }

    })

    $('.list-module-text').click(function () {
        var p = document.getElementById("con");
        var q = $(this)[0].innerHTML;
        p.innerHTML = q;
        $('.insidebox').css('display', 'none');

    })



})