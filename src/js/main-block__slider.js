
var standartsSwiper = new Swiper('#main-block__swiper',{


  allowTouchMove: false,

  effect: 'fade', 
  fadeEffect: {
    crossFade: true, 
  },

  speed: 2000,

  autoplay: {
    delay: 2000, 
  },

  loop: true,

  lazy: {
    loadPrevNext: true, 
    loadPrevNextAmount: 0, 
  },

});