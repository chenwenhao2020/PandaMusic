//改变屏幕大小时执行的函数
$(window).resize(function() { 
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    
     if(winWidth <= 1220){
         $(".MyMusic-search").stop();
         $(".MyMusic-search input").stop();
         $(".MyMusic-search").animate({"width": "38px"})
         $(".MyMusic-search input").animate({"width": 0})
//       console.log(1)
     }else{
         $(".MyMusic-search").stop();
         $(".MyMusic-search input").stop();
         $(".MyMusic-search").animate({"width": "220px"})
         $(".MyMusic-search input").animate({"width":"174px"})
     }  
});

$(document).ready(function(){
//  搜索条缩小、放大动画
    $(".MyMusic-search").mouseenter(function(){
        winWidth = window.innerWidth;
        if(winWidth <= 1220){
            $(".MyMusic-search").stop();
            $(".MyMusic-search input").stop();
            $(".MyMusic-search").animate({"width": "220px"})
            $(".MyMusic-search input").animate({"width":"174px"})
        }
    }).mouseleave(function(){
        winWidth = window.innerWidth;
        if(winWidth <= 1220){
            $(".MyMusic-search").stop();
            $(".MyMusic-search input").stop();
            $(".MyMusic-search").animate({"width": "38px"})
            $(".MyMusic-search input").animate({"width": 0})
        }
    })
})
