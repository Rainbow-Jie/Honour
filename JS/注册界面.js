$(function(){

    $('.texteyeoff1').click (function(){
         
        $('.texteyeoff1').css('display','none');
        $('.texteyeon1').css('display','block');
        document.getElementById('userpass').type='text'; 
         });


         $('.texteyeon1').click (function()
        {  $('.texteyeon1').css('display','none');
           $('.texteyeoff1').css('display','block');
           document.getElementById('userpass').type='password'; 
        });
    
        $('.texteyeoff2').click (function(){
         
            $('.texteyeoff2').css('display','none');
            $('.texteyeon2').css('display','block');
            document.getElementById('userpass1').type='text'; 
             });
    
    
             $('.texteyeon2').click (function()
            {  $('.texteyeon2').css('display','none');
               $('.texteyeoff2').css('display','block');
               document.getElementById('userpass1').type='password'; 
            });
    












            window.onload = function(){ 
               var nScrollHight = document.getElementById("divContent").offsetHeight; //滚动距离总长(注意不是滚动条的长度)
               var nScrollTop = 0;   //滚动到的当前位置
               var nDivHight = document.getElementById("divContainer").offsetHeight; //divContainer的高度
               
               document.getElementById("divContainer").onscroll =function(){   
                   nScrollTop = this.scrollTop;//0~250;
                   nScrollHight = this.scrollHeight;//750,1000;
                   if(nScrollTop + nDivHight >= nScrollHight)
                   {
                       document.getElementById("divContent").style.height=1000;
                       alert("Scroll to Bottom, ScrollTop is:" + nScrollTop);
                   }
               }   
           }
                     var j=0;
                     $('.input-left').click(function(){
                         if(j%2==0)
                     {   $('.insidebox').css('display','block');
                       
                         j++;
                     }
                         else{ $('.insidebox').addClass('active');
                         j++;
                   }
                     
                  })




           
               $('.list-module-text').click(function(){
                 var p=document.getElementById("con");
                 var q=$(this)[0].innerHTML; 
                 p.innerHTML=q;
                 $('.insidebox').css('display','none');
                 
               }) 
              

//                $('#userId').click(function(){

//                var p=document.getElementById("userId");
//                var q=$(this)[0].innerHTML; 
               
//                if(q!=null){

//                   console.log('1');
//                $('.disabled').css('display','none')
// // }

//                })
              









})