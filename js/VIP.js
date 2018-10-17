$(document).ready(function(){
    var slide = new pageSwitch('my-slide',{
            duration:600,           //int 页面过渡时间
            direction:1,            //int 页面切换方向，0横向，1纵向
            start:0,                //int 默认显示页面
            loop:false,             //bool 是否循环切换
            ease:'ease',            //string|function 过渡曲线动画，详见下方说明
            transition:'scroll',     //string|function转场方式，详见下方说明
            freeze:false,           //bool 是否冻结页面（冻结后不可响应用户操作，可以通过 `.freeze(false)` 方法来解冻）
            mouse:true,             //bool 是否启用鼠标拖拽
            mousewheel:true,       //bool 是否启用鼠标滚轮切换
            arrowkey:true,         //bool 是否启用键盘方向切换
            autoplay:false,         //bool 是否自动播放幻灯 新增
            interval:2000            //bool 幻灯播放时间间隔 新增
    });
    
    $(".one-title-1").css({"opacity": 1, "transform": "scale(1)"});
    setTimeout(function(){
        $(".one-text-1").css({"opacity": 1, "transform": "scale(1)"});
    }, 200)
    setTimeout(function(){
        $(".one-btn").css({"opacity": 1, "transform": "scale(1)"});
    }, 400)
    
    $(".nav-item").mouseover(function(){
        if($(this).hasClass("not-choose")){
            $(this).addClass("hover-choose")
        }
    }).mouseout(function(){
        if($(this).hasClass("not-choose")){
            $(this).removeClass("hover-choose") 
        }
    })
    
    $(".nav-item").click(function(){
        if($(this).hasClass("not-choose")){
            $(".nav-item").removeClass("choose");
            $(".nav-item").removeClass("hover-choose");
            $(".nav-item").addClass("not-choose");
            $(this).removeClass("not-choose")
            $(this).addClass("choose");
            
            if($(this).hasClass("nav-item-1")){
                $(".one-bg-item").hide();
                $(".one-bg-item-1").fadeIn(1000);
                
                $(".one-title").css({"transform": "scale(1.2)", "opacity": 0});
                setTimeout(function(){
                    $(".one-text").css({"transform": "scale(1.2)", "opacity": 0});
                }, 100)
                
                setTimeout(function(){
                    $(".one-title-1").css({"transform": "scale(1)", "opacity": 1});
                }, 400)
                
                setTimeout(function(){
                    $(".one-text-1").css({"transform": "scale(1)", "opacity": 1});
                }, 500)
            }
            if($(this).hasClass("nav-item-2")){
                $(".one-bg-item").hide();
                $(".one-bg-item-2").fadeIn(1000);
                
                $(".one-title").css({"transform": "scale(1.2)", "opacity": 0});
                
                
                setTimeout(function(){
                    $(".one-text").css({"transform": "scale(1.2)", "opacity": 0});
                }, 100)
                
                setTimeout(function(){
                    $(".one-title-2").css({"transform": "scale(1)", "opacity": 1});
                }, 400)
                
                setTimeout(function(){
                    $(".one-text-2").css({"transform": "scale(1)", "opacity": 1});
                }, 500)
            }
            if($(this).hasClass("nav-item-3")){
                $(".one-bg-item").hide();
                $(".one-bg-item-3").fadeIn(1000);
                
                $(".one-title").css({"transform": "scale(1.2)", "opacity": 0});
                setTimeout(function(){
                    $(".one-text").css({"transform": "scale(1.2)", "opacity": 0});
                }, 100)
                
                setTimeout(function(){
                    $(".one-title-3").css({"transform": "scale(1)", "opacity": 1});
                }, 400)
                
                setTimeout(function(){
                    $(".one-text-3").css({"transform": "scale(1)", "opacity": 1});
                }, 500)
            }
        }
    })
    
//  第二部分动画播放

    
    
    $(window).mousewheel(function(){
        
//      setTimeout(function{
//          if($(".one").css  )
//      })
//      

        if($(".two").css("display") == "block"){
            setTimeout(function(){
                $(".two-container").find("h2").css({"margin-top": 0, "opacity": 1});
            }, 300)
            
            setTimeout(function(){
                $(".two-cont").find("p").css({"margin-top": 0, "opacity": 1});
                $(".two-shine-1").css({"opacity": 1, "transform": "translate(0,0)"});
            }, 500)
            
            setTimeout(function(){
                $(".two-icon-1").css({"margin-top": 0, "opacity": 1});
                $(".two-shine-2").css({"opacity": 1});
                $(".two-shine-3").css({"opacity": 1});
            }, 700)
            
            setTimeout(function(){
                $(".two-icon-2").css({"margin-top": 0, "opacity": 1});
            }, 800)
            
            setTimeout(function(){
                $(".two-icon-3").css({"margin-top": 0, "opacity": 1});
            }, 900)
             
        }
        
        if($(".three").css("display") == "block"){
            setTimeout(function(){
                $(".three").find("h2").css({"margin-top": 0, "opacity": 1});
            }, 300)
            
            setTimeout(function(){
                $(".three").find("p").css({"margin-top": 0, "opacity": 1});
                $(".three-shine-1").css({"opacity": 1, "transform": "translate(0,0)"});
            }, 500)
            
            setTimeout(function(){
                $(".three-icon-1").css({"margin-top": 0, "opacity": 1});
                $(".three-shine-2").css({"opacity": 1, "transform": "translate(0,0)"});
                $(".three-shine-3").css({"opacity": 1, "transform": "translate(0,0)"});
            }, 700)
            
            setTimeout(function(){
                $(".three-icon-2").css({"margin-top": 0, "opacity": 1});
            }, 800)
            
            setTimeout(function(){
                $(".three-icon-3").css({"margin-top": 0, "opacity": 1});
            }, 900)
            
            setTimeout(function(){
                $(".three-icon-4").css({"margin-top": 0, "opacity": 1});
            }, 1100)
             
        }
        
        if($(".four").css("display") == "block"){
            setTimeout(function(){
                $(".four").find("h2").css({"margin-top": 0, "opacity": 1});
            }, 300)
            
            setTimeout(function(){
                $(".four").find("p").css({"margin-top": 0, "opacity": 1});
                $(".four-shine-1").css({"opacity": 1, "transform": "translate(0,0)"});
            }, 500)
            
            setTimeout(function(){
                $(".four-icon-1").css({"margin-top": 0, "opacity": 1});
                $(".four-shine-2").css({"opacity": 1, "transform": "translate(0,0)"});
                $(".four-shine-3").css({"opacity": 1, "transform": "translate(0,0)"});
            }, 700)
            
            setTimeout(function(){
                $(".four-icon-2").css({"margin-top": 0, "opacity": 1});
            }, 800)
            
            setTimeout(function(){
                $(".four-icon-3").css({"margin-top": 0, "opacity": 1});
            }, 900)
        }
        
        if($(".five").css("display") == "block"){
            setTimeout(function(){
                $(".five").find("h2").css({"margin-top": 0, "opacity": 1});
            }, 300)
            
            setTimeout(function(){
                $(".five").find("p").css({"margin-top": 0, "opacity": 1});
                $(".five-shine-1").css({"opacity": 1, "transform": "translate(0,0)"});
                $(".five-shine-4").css({"opacity": 1, "transform": "translate(0,0)"});
            }, 500)
            
            setTimeout(function(){
                $(".five-icon-1").css({"margin-top": 0, "opacity": 1});
                $(".five-shine-2").css({"opacity": 1, "transform": "translate(0,0)"});
                $(".five-shine-3").css({"opacity": 1, "transform": "translate(0,0)"});
            }, 700)
            
            setTimeout(function(){
                $(".five-icon-2").css({"margin-top": 0, "opacity": 1});
            }, 800)
            
            
        }
        
    })
    


})

