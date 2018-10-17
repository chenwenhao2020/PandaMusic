$(document).ready(function(){
//  改变底部图标
    $(".bottom-download-item").mouseover(function(){
        $(this).find("i").css("background-position-y", "-49px")
    }).mouseout(function(){
        $(this).find("i").css("background-position-y", 0)
    })
    
    $(".bottom-product-item").mouseover(function(){
        $(this).find("i").css("background-position-y", "-49px")
    }).mouseout(function(){
        $(this).find("i").css("background-position-y", 0)
    })
})