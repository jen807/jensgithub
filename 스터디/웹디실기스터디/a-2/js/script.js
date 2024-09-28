jQuery(document).ready(function(){
    
    $('.menu').mouseover(function(){
        $(`.submenu_wrap`).stop().slideDown(500);
        $(`#menu_bg`).stop().slideDown(500);
    }).mouseout(function(){
        $(`.submenu_wrap`).stop().slideUp(500);
        $(`#menu_bg`).stop().slideUp(500);
    });

});