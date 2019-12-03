
// MAKE SECONDARY NAVBAR STICKY
function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  if (window_top > div_top) {
    $('.case-study-nav-links').addClass('stick');
  } else {
    $('.case-study-nav-links').removeClass('stick');
  }
}

//TEST



// MAIN
$(document).ready(function() {
    var listItems = $(".link-anchor");
    var list_item_width=0;
    for (let li of listItems) {
      list_item_width = list_item_width + $(li).width() +48 ;
    }

    var minW=list_item_width+'px';
    console.log(minW);
    $(".case-study-nav-anchors").css({
      minWidth: minW
  });


  //MAKE NAVBAR STICKY ON REACHING TOP
    $(window).scroll(sticky_relocate);
    sticky_relocate();

    // SMOOTH SCROLL ON CLICK
    $('.link-anchor').bind('click', function(e) {
      e.preventDefault(); 
      var target = $(this).attr("href"); 

      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target;
      });
      return false;
  });
});


// BOTTOM BORDER SLIDE ON SCROLL
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $('.case-study-section').each(function(i) {
      if ($(this).position().top - 90 <= scrollDistance) {
          $('.link-anchor.active').removeClass('active');
          $('.link-anchor').eq(i).addClass('active');
      }
  });
}).scroll();