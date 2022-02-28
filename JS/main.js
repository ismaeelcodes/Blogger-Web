$(document).ready(function(){
   
  $navbar = $('.dropdown');
  $togglecollapse = $('.collapsemenu');

  /* Toggle Menu Click Event */
  $togglecollapse.click(function(){
    $navbar.toggleClass('collapse');
  })

});