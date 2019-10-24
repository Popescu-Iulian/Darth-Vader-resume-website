$(document).ready(function() {
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-links").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $('.top-nav a[href*="#"]').on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      2000
    );
  });

  $("#up").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });

  // asta se poate face si din css -- merita cautat si inlocuit (de fapt, ar fi bine de scapat de tot ce inseamna js aici):
  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true
  });
});
