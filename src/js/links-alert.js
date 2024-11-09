

var links = document.querySelectorAll('a');

links.forEach(function (link) {
  if (!link.classList.contains('aside__page') &&
    !link.classList.contains('infrastructure__card-link') &&
    !link.classList.contains('standarts__slider-left') &&
    !link.classList.contains('standarts__slider-right') &&
    !link.classList.contains('standarts__slider-right')) 
  {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Ссылка нажата')
    });
  }
});
