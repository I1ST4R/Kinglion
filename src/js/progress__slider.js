const months = document.querySelectorAll(".progress__month")
const monthsTitle = document.querySelector(".progress__left-card .progress__card-title")
var monthsBreakPoints = []
var sumOfPictures = 0
var monthIndex = 0

months.forEach(function(el){
  monthsBreakPoints.push(+ el.getAttribute('data-nums-of-pictures') + sumOfPictures)
  sumOfPictures += + el.getAttribute('data-nums-of-pictures')
})

monthsBreakPoints.pop() // 3 5 

var progressSwiper = new Swiper('#progress__swiper',{

  navigation: {
    nextEl: '.progress__slider-right',
    prevEl: '.progress__slider-left',
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
      var IndexMonthsBreakPoints = monthsBreakPoints.length - 1
      var activeIndex = progressSwiper.activeIndex

      var newMonthIndex = DefineMonth(IndexMonthsBreakPoints)

      if (monthIndex != newMonthIndex){
        months[monthIndex].classList.add('orange-text')
        months[monthIndex].innerHTML = months[monthIndex].innerHTML.substring(2)

        monthIndex = newMonthIndex

        months[monthIndex].classList.remove('orange-text')
        months[monthIndex].innerHTML = "• " + months[monthIndex].innerHTML

        var curMonthStr = months[monthIndex].innerHTML
        var yearIndex = curMonthStr.indexOf('2') 
        var firstPartTitle = curMonthStr.slice(2, yearIndex)
        var secondPartTitle = curMonthStr.slice(yearIndex + 5, curMonthStr.length)

        monthsTitle.innerHTML = firstPartTitle + secondPartTitle
        
      }

      function DefineMonth(Index){
        var currentBpoint = monthsBreakPoints[Index]

        if (activeIndex < currentBpoint && Index === 0)return Index 
        if (activeIndex < currentBpoint && Index != 0) return DefineMonth(Index - 1)
        if (activeIndex >= currentBpoint) return Index + 1 
      }
    }
  },

});

document.addEventListener('click', function(e){
  if (e.target.closest('.progress__month')){
    var targetId = e.target.id
    var indexMonths = targetId.substring('progress__month'.length)
    
    if (+indexMonths === 0) progressSwiper.slideTo(0)
    else progressSwiper.slideTo(monthsBreakPoints[indexMonths - 1])
  }
})

