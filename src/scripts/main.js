$(document).ready(function () {
  //UI var
  var bannerSlider = $('#banner-slider');
  var caseSlider = $('#js-case-slider');
  var header = $('.page-header');
  var rSlider = $('#recommendation-slider');
  var humburgBtn = $('#js-btn-menu');
  var menu = $('.menu');

  init();

  function init() {
    bannerSlider.slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            infinite: true,
            dots: false,
            autoplay: true
          }
        }
        ]
    });
    caseSlider.slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true,
      dots: true,
      arrows: false,
      dotsClass: 'custom-dots',
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },{
          breakpoint: 992,
          settings: {
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },{
          breakpoint: 767,
          settings: {
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
        ]
    });
    rSlider.slick({
      autoplay: true,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      pauseOnHover: true,
    });

    $(window).on('load resize', function () {
      var headerHaight = header.innerHeight();
      var mainWrp = $('#main-wrp');
      mainWrp.css('padding-top', headerHaight);
    });

    humburgBtn.on('click', triggerMenu);

    $(window).on('load resize',reset)
  }

  function triggerMenu () {
      if(!menu.hasClass('show-menu')){
        menu.addClass('show-menu');
        $(this).addClass('active');
        $('body').css('overflow','hidden');
      }else{
        menu.removeClass('show-menu');
        $(this).removeClass('active');
        $('body').removeAttr('style');
      }
  }

  function reset(){
    if($(window).width() > 992){
      if(menu.hasClass('show-menu')){
        menu.removeClass('show-menu');
        humburgBtn.removeClass('active');
        $('body').removeAttr('style');
      }
    }
  }
});
