/* nav bar */

$( document ).ready(function() {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('#top-message').hide();
        } else {
            $('.navbar').removeClass('active');
            $('#top-message').show();
        }
    });
});

/* slider */

$( document ).ready(function() {
  $('#slider').owlCarousel({
      loop:true,
      autoplay:true,
      smartSpeed: 2000,
      margin:0,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      animateIn: 'sladeInRight',
      animateOut: 'slideOutLeft',
      autoplayTimeout:4000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              dots: false
          },
          768:{
              items:1,
              nav:true,
              dots: false
          },
          992:{
              items:1,
              nav:true,
              dots: false
          },
          1200:{
              items:1,
              nav:true,
              dots: false
          }
      }
  });
});




