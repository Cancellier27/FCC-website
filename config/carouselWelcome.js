const slidesText = document.querySelectorAll('.slidesText')
const carouselContainerText = document.querySelector('.carouselSliderText')

let welcomeInterval;
const intervalWelcome = 5000

function welcomeSlider() {
  const imgSelected = carouselContainerText.querySelector('.selected')
  imgSelected.classList.remove('selected')
  
  clearInterval(welcomeInterval)

  if (imgSelected.nextElementSibling) {
    imgSelected.nextElementSibling.classList.add('selected')
  } else {
    slidesText[0].classList.add('selected')
  }

  carouselLoopText()
};

function carouselLoopText() {
  welcomeInterval = setInterval(() => welcomeSlider(), intervalWelcome)
}

carouselContainerText.addEventListener('mouseenter', () => {
  clearInterval(welcomeInterval)
});

carouselContainerText.addEventListener('mouseleave', carouselLoopText);


carouselLoopText()
