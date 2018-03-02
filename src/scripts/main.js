$(document).ready(function() {

  var bannerSlider = $('#banner-slider');

  init()

  function init() {
    bannerSlider.slick({
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    })
  }

});
