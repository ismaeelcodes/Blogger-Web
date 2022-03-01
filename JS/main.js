const responsive = {
  0 : {
    items: 1
  },
  320 : {
    items: 1
  },
  560 : {
    items: 2
  },
  960 : {
    items: 3
  },

}

$(document).ready(function(){
   
  $navbar = $('.dropdown');
  $togglecollapse = $('.collapsemenu');

  /* Toggle Menu Click Event */
  $togglecollapse.click(function(){
    $navbar.toggleClass('collapse');
  })
 
  // owl carousel for articles slide
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
  });


  // click to scroll to top
  $('.moveup span').click(function(){
    $('html, body').animate({
      scrollTop:0
    }, 1000)
  })
});