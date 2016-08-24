(function($) {
  $('a#about-link').click(function() {
    $('html, body').animate({
      scrollTop: $('#about-header').offset().top - 32
    }, 500);
  });

  $('a#faq-link').click(function() {
    $('html, body').animate({
      scrollTop: $('#faq-header').offset().top - 32
    }, 500);
  });
}(jQuery));

$(document).ready(function(){
  $('.parallax').parallax();
});