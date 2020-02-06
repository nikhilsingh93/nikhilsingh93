$(document).ready(function(){

    // hamburger menu hide and show
    $('.hamburger-icon').click(function(){
        $('.hamburger-menu').css("right", "0");
     });

     $('.close-menu-button').click(function(){
        $('.hamburger-menu').css("right", "-420px");
     });
});
