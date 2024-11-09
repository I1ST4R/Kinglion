
document.addEventListener('DOMContentLoaded', function () {

  let previousScrollPosition = 0;
  let counter = 0;
  const header = document.querySelector('.header');
  document.addEventListener('scroll', function() {

    const currentScrollPosition = window.scrollY;
    counter = counter + (currentScrollPosition - previousScrollPosition);

    if (counter >= 300 && counter != 0){
      counter = 0;
      header.style.opacity = '0';
    } 
    if(counter < -300 && counter != 0){
      counter = 0;
      header.style.opacity = '1';
    } 

    previousScrollPosition = currentScrollPosition;

  });

});