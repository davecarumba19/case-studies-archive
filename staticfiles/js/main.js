$(document).ready(function(){
    $(".menu").click(function(){
      $(".links").toggle();
      $(".menu").toggleClass("bi-x");
    });
});
$( window ).resize(function() {
  if ($(window).width() > 849) {
      $(".links").attr("style","display: static;");
      $(".menu").removeClass("bi-x");
  }
});