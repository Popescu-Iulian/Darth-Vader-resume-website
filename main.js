$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })

    $('.top-nav .nav-links').on('click', function () {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
  })
});