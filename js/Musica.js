$(document).ready(function(){
//  第一部分淡入
    //  改变title和heaer透明度,改变margin.  
    $(".header-title").animate({"margin-top": 0, "opacity": 1}, 1000);
    $(".header-name").animate({"margin-top": 0, "opacity": 1}, 1000);
    //  一秒后执行按钮的出现
    setTimeout(function(){
        $(".header-btn").animate({"margin-top": "20px", "opacity": 1}, 1000);
    }, 500)
    
//  第二部分图片淡入
    $(".creation-circle").animate({"left": 0, "opacity": 1}, 1000);
    setTimeout(function(){
        $(".creation-cont-2").animate({"left": "236px", "opacity": 1}, 1000);
    }, 1000)
    
//  第二部分介绍文字淡入
    $(".creation-intro").find("h2").animate({"margin-top": 0, "opacity": 1}, 1000);
    setTimeout(function(){
        $(".creation-intro").find("p").animate({"margin-top": 0, "opacity": 1}, 1000);
    }, 400)
    setTimeout(function(){
        $(".intro-icon").animate({"margin-top": 0, "opacity": 1}, 1500);
    }, 800)
    
//  屏幕滚动高度
    $(document).scroll(function(){
        var scrollTop = $(window).scrollTop();
        
//      第三部分动画播放
        if(scrollTop >= 422){
//          图片淡入
            $(".ornament-phone").animate({"right": "176px", "opacity": 1}, 1000)
            $(".ornament-cont3").animate({"right": "213px", "opacity": 1}, 1000)
            setTimeout(function(){
                $(".ornament-img").find("i").css({"transform": "rotate(0deg) scale(1)", "opacity": "1"});
            }, 800)
            
//          文字淡入
            $(".ornament-intro").find("h2").animate({"margin-top": 0, "opacity": 1}, 1000);
            setTimeout(function(){
                $(".ornament-intro").find("p").animate({"margin-top": 0, "opacity": 1}, 1000);
            }, 400)
            setTimeout(function(){
                $(".ornament > .intro-icon").animate({"margin-top": 0, "opacity": 1}, 1500);
            }, 800)
        }
        
//      第四部分动画播放
        if(scrollTop >= 1102){
//          图片淡入
            $(".data-circle").animate({"left": 0, "opacity": "1"}, 1000);
            $(".data-mac").animate({"left": "20px", "opacity": "1"}, 1000);
        
//          文字淡入
            $(".data-intro").find("h2").animate({"margin-top": 0, "opacity": 1}, 1000);
            setTimeout(function(){
                $(".data-intro").find("p").animate({"margin-top": 0, "opacity": 1}, 1000);
            }, 400)
            setTimeout(function(){
                $(".data-intro > .intro-icon").animate({"margin-top": 0, "opacity": 1}, 1500);
            }, 800)
        }
        
//      第五部分动画播放
        if(scrollTop >= 1782){
//          图片淡入
            $(".mode-circle").animate({"right": 0, "opacity": 1}, 1000)
            $(".mode-phone").animate({"right": "70px", "opacity": 1}, 1000)
            $(".mode-cont4").animate({"right": "107px", "opacity": 1}, 1000)

//          文字淡入
            $(".mode-intro").find("h2").animate({"margin-top": 0, "opacity": 1}, 1000);
            setTimeout(function(){
                $(".mode-intro").find("p").animate({"margin-top": 0, "opacity": 1}, 1000);
            }, 400)
            setTimeout(function(){
                $(".mode.intro > .intro-icon").animate({"margin-top": 0, "opacity": 1}, 1500);
            }, 800)
        }
        
    })
    
    

})
