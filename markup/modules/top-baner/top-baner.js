$(document).ready(function () {
  $('.top-baner-slide').slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    slidesToShow: 1,
    fade: true,
    prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"><i class="fa fa-angle-right"></i></span>',
  });
});