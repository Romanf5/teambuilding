$(document).ready(function () {
  //UI var
  var bannerSlider = $('#banner-slider');
  var caseSlider = $('#js-case-slider');
  var header = $('.page-header');

  init();

  function init() {
    bannerSlider.slick({
      dots: true,
      arrows: false,
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
      arrows: false,
      dotsClass: 'custom-dots',
    });
    $(window).on('scroll', function () {
      stickyHandler(header, 0);
    });
  }

  function stickyHandler(element, startPosition) {
    if (element.hasClass('page-header')) {
      var headerHaight = header.height();
      var mainWrp = $('#main-wrp');

      if ($(window).scrollTop() > startPosition) {
        mainWrp.css('padding-top', headerHaight);
        element.addClass('sticky');
      } else {
        mainWrp.removeAttr('style');
        element.removeClass('sticky')
      }
    }
  }

});
