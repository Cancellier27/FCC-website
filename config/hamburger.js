const slideToggle = document.querySelector(".navList")

function onMenuToggle() {
  if(slideToggle.style.right === "-50px") {
    slideToggle.style.right = "-250px"
  } else {
    slideToggle.style.right = "-50px"
  }  
}
