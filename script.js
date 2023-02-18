// 메뉴
$(document).ready(function(){
	 
    $('.menu_btn>button').on('click', function(){
        $('.menu_bg').show(); 
        $('.close_btn').show(); 
        $('.menu_btn').hide(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
    $('.close_btn>button').on('click', function(){
        $('.menu_bg').hide(); 
        $('.close_btn').hide(); 
        $('.menu_btn').show(); 
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
                   },function(){
$('.sidebar_menu').hide(); 
}); 
    });

});
