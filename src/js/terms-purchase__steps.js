var stepName = 'terms-purchase__step';
var infoBlockName = 'terms-purchase__information-block'
const steps = document.querySelectorAll('.' + stepName)
const infoBlocks = document.querySelectorAll('.' + infoBlockName)

var prevI = 1;
document.addEventListener('click', function(e){
  if(e.target.closest('.' + stepName + ' p')){
    var id = e.target.id;
    var i = id.substring(stepName.length);

    steps[prevI].classList.remove(stepName + '--active')
    infoBlocks[prevI].classList.remove(infoBlockName + '--active')

    setTimeout(function() {
      steps[i].classList.add(stepName + '--active')
      infoBlocks[i].classList.add(infoBlockName + '--active')
    }, 400);

    prevI = i;
  }
})