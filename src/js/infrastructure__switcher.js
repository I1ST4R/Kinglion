

var switcherName = 'infrastructure__switcher'
var mapName = 'infrastructure__map'
var cardsName = 'infrastructure__information'
var switcherBtnName = 'infrastructure__switcher-btn'

const switcher = document.querySelector("." + switcherName)
const map = document.querySelector("." + mapName)
const cards = document.querySelector("." + cardsName)
const switcherLeft = document.querySelector("#infrastructure__switcher-btn1")
const switcherRight = document.querySelector("#infrastructure__switcher-btn2")

switcher.addEventListener('click', function (e) {

  e.preventDefault();
  map.classList.toggle(mapName + '--active');
  cards.classList.toggle(cardsName + '--active')
  switcherLeft.classList.toggle(switcherBtnName + '--active')
  switcherRight.classList.toggle(switcherBtnName + '--active')

});

changeSwitcher() 

window.addEventListener('resize', function() {
  changeSwitcher()
});

function changeSwitcher() {
  if (window.innerWidth <= 600 &&
  switcherLeft.innerHTML !=  'показать'  
  ){
    switcherLeft.innerHTML = 'показать'
    switcherRight.innerHTML = 'скрыть'
    switcherLeft.classList.add(switcherBtnName + '--active')
    switcherRight.classList.remove(switcherBtnName + '--active')
    cards.classList.remove(cardsName + '--active')
  }
  if (window.innerWidth > 600 && 
  switcherLeft.innerHTML ===  'показать') {
    switcherLeft.innerHTML = 'Показать на карте'
    switcherRight.innerHTML = 'Показать карточками'

    if(switcherLeft.classList.contains(switcherBtnName + '--active')){
      map.classList.remove(mapName + '--active') 
      cards.classList.add(cardsName + '--active') 
    }
    else{
      map.classList.add(mapName + '--active') 
      cards.classList.remove(cardsName + '--active') 
    }

  }
}