
const counterBlock = document.querySelectorAll('.standarts__counter');

const rectangles = document.querySelectorAll('.standarts__rectangle');

var prevSlideIndex = 0

var standartsSwiper = new Swiper('#standarts__swiper',{

  spaceBetween: 30,

  navigation: {
    nextEl: '.standarts__slider-right',
    prevEl: '.standarts__slider-left',
  },

  keyboard: true,

  allowTouchMove: true,

  coverflowEffect: {
    rotate: 30, 
    stretch: 10, 
    depth: 60, 
    modifier: 2, 
    slideShadows: true, 
  },

  speed: 500,

  on: {
    slideChange: function () {

      var slideIndex = standartsSwiper.activeIndex
    
      counterBlock.forEach( el => 
      {  
        el.innerHTML = `0${slideIndex+1}/05`
      })

      rectangles[slideIndex].classList.add('standarts__rectangle--active')
      rectangles[prevSlideIndex].classList.remove('standarts__rectangle--active')
      prevSlideIndex = slideIndex;
    },
  },

});


