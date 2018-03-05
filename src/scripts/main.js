$(document).ready(function() {
  //UI var
  var bannerSlider = $('#banner-slider');
  var caseSlider = $('#js-case-slider');

  init();

  function init() {
    bannerSlider.slick({
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
    caseSlider.slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true,
      dots: true,
      arrows:false,
      dotsClass: 'custom-dots',
    });
  }

});
