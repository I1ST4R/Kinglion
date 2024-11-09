var btnName = 'aside-menu'
var asideName = 'aside'
const menuButton = document.querySelector('.' + btnName);
const aside = document.querySelector('.' + asideName);

document.addEventListener('click', function (e) {

  if (e.target.closest('.' + btnName)) {
    menuButton.classList.remove(btnName + '--visible');
    aside.classList.add(asideName + '--visible');
  }
  else if( aside.classList.contains(asideName + '--visible' )){
    menuButton.classList.add(btnName + '--visible');
    aside.classList.remove(asideName + '--visible');
  }

})
