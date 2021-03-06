const slidesImages = document.querySelectorAll('.slidesImg')
const carouselContainer = document.querySelector('.carouselSlider')

let timeInterval;
const interval = 5000

function ImageSlider(orientation) {
  const imgSelected = carouselContainer.querySelector('.selected')
  imgSelected.classList.remove('selected')
  
  clearInterval(timeInterval)

  if (orientation === 'next') {
    if (imgSelected.nextElementSibling) {
      imgSelected.nextElementSibling.classList.add('selected')
    } else {
      slidesImages[0].classList.add('selected')
    }
  } else {
    if (imgSelected.previousElementSibling) {
      imgSelected.previousElementSibling.classList.add('selected')
    } else {
      slidesImages[slidesImages.length - 1].classList.add('selected')
    }
  }

  carouselLoop()
};

function carouselLoop() {
  timeInterval = setInterval(() => ImageSlider('next'), interval)

  const imgSelected = carouselContainer.querySelector('.selected')
  imgSelected.querySelector(".repoLink").style.opacity = 0
}

carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(timeInterval)

  const imgSelected = carouselContainer.querySelector('.selected')
  imgSelected.querySelector(".repoLink").style.opacity = 1

});

carouselContainer.addEventListener('mouseleave', carouselLoop);

carouselLoop()
