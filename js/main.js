$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  })
  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }
  });
  // smooth scrolling
  $('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop : $($(this).attr('href')).offset().top,
    },
      500,
      'linear'
    );
  });
});

// init Isotope
var $grid = $('.gallery').isotope({
  // options
});
// filter items on button click
$('.portfolio_menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.portfolio_menu').on( 'click', 'li', function() {
  $(this).toggleClass('active').siblings().removeClass('active');
});
