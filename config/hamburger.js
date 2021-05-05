const slideToggle = document.querySelector(".navList")


function onMenuToggle() {
  
  if(slideToggle.style.opacity === "0") {
    slideToggle.style.opacity = "1"
  } else {
    slideToggle.style.opacity = "0"
  }  
}

