$(document).ready(function () {
  $(".reviews-slider").slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    infinite: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"><i class="fa fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"><i class="fa fa-chevron-right"></i></span>',

    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true
        }

      }, {

        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }

      }]
  });
});