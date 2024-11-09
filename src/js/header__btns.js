var arrowName = 'header__arrow'
var btnsName = 'header__buttons'
const arrow = document.querySelector('.' + arrowName)
const btns = document.querySelector('.' + btnsName)

document.addEventListener('click', function (e) {

  if (e.target.closest('.' + arrowName)) {

    if(arrow.classList.contains(arrowName + '--active')){  
      arrow.classList.remove(arrowName + '--active')
      btns.classList.remove(btnsName + '--active');
    }

    else{
      arrow.classList.add(arrowName + '--active')
      btns.classList.add(btnsName + '--active');
    }

  } 
})
