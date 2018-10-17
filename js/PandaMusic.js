//改变屏幕大小时执行的函数
$(window).resize(function() {  
//   中间内容的移动
     winWidth = window.innerWidth;
     winHeight = window.innerHeight;
     
     if(winHeight <= 800){
         $(".middle-contain").stop();
         $(".middle-contain").animate({"margin-top": "220px"}, 1000)
     }else{
         $(".middle-contain").stop();
         $(".middle-contain").animate({"margin-top": "350px"}, 1000)
     }
     
     
});


