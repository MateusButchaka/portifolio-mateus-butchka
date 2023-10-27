$(document).ready(function(){

  $('.scroll-top').hide();

  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('active');
  });

  $(window).on('scroll',function(){
    
    $('#menu-btn').removeClass('fa-times');
    $('.navbar').removeClass('active');

    if($(window).scrollTop() > 0){
      $(".header").addClass("sticky");
    }else{
      $(".header").removeClass("sticky");
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

  });

});

