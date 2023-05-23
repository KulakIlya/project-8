let currentSlideNum = 0;
let quotesCurrentSlideNum = 0;

function nextSlideStyle(nextSlideIndex) {
  const quotesSlides = document
    .getElementById('quotes')
    .querySelector('.slider')
    .querySelector('.slides');

  const currentNextSlide = quotesSlides.querySelector('.next-slide');
  const nextSlide = quotesSlides.querySelectorAll('.slide')[nextSlideIndex];

  nextSlide.classList.add('next-slide');

  currentNextSlide.classList.remove('next-slide');
}

function nextOrPrevSlide(sliderIndex, n) {
  sliderBtnOnClick(sliderIndex, currentSlideNum + n);
}

function sliderBtnOnClick(sliderIndex, slideIndex) {
  const slider = document.querySelectorAll('.slider')[sliderIndex];
  console.log(slider);

  const sliderBtn = slider.querySelector('.slider-btn');

  if (slideIndex > Math.floor(sliderBtn.childNodes.length / 2) - 1)
    slideIndex = 0;
  else if (slideIndex < 0)
    slideIndex = Math.floor(sliderBtn.childNodes.length / 2) - 1;

  currentSlideNum = slideIndex;

  const slide = slider.querySelectorAll('.slide')[slideIndex];
  const slideBtn = sliderBtn.querySelectorAll('.slide-btn')[slideIndex];

  let currentSlide = slider.querySelector('.current-slide');

  let currentSlideBtn = sliderBtn.querySelector('.current-slide-btn');

  if (!slide.classList.contains('current-slide')) {
    slide.classList.add('current-slide');
    currentSlide.classList.remove('current-slide');

    slideBtn.classList.add('current-slide-btn');
    currentSlideBtn.classList.remove('current-slide-btn');
  }
}

function accordiation(index) {
  const clickedBtn = document
    .getElementById('questions')
    .querySelector('.questions-list')
    .querySelectorAll('.item')[index];

  if (!clickedBtn.classList.contains('active'))
    clickedBtn.classList.add('active');
  else clickedBtn.classList.remove('active');
}
