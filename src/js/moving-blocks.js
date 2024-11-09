//get collection of blocks
const blocks = document.querySelectorAll('.block-for-moving')

//blocks moving when page is load and when window resize
moveBlocks()
window.addEventListener('resize', function(e){
  moveBlocks();
});

//function for move all blocks
function moveBlocks(){
  blocks.forEach(el => {
    moveBlock(el)
  })
}
//function for move block from container1 to container2 on windowWidth
function moveBlock(block){
  const container1 = document.querySelector(block.getAttribute('data-container1'))
  const container2 = document.querySelector(block.getAttribute('data-container2'))
  const windowWidth = block.getAttribute('data-window-width')

  if (window.innerWidth <= +windowWidth) container2.appendChild(block);
  else container1.appendChild(block);
}