const slidesImages = document.querySelectorAll('.slidesText')
const carouselContainer = document.querySelector('.carouselSliderText')

let timeInterval;
const interval = 5000

function welcomeSlider() {
  const imgSelected = document.querySelector('.selected')
  imgSelected.classList.remove('selected')
  
  clearInterval(timeInterval)

  if (imgSelected.nextElementSibling) {
    imgSelected.nextElementSibling.classList.add('selected')
  } else {
    slidesImages[0].classList.add('selected')
  }

  carouselLoop()
};

function carouselLoop() {
  timeInterval = setInterval(() => welcomeSlider('next'), interval)
}

carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(timeInterval)
});

carouselContainer.addEventListener('mouseleave', carouselLoop);


carouselLoop()
