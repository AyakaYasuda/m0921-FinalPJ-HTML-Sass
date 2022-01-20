const slides = document.querySelectorAll('.slider-contents');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const slider = () => {
  let curSlide = 0;
  const maxSlide = slides.length;

  const activeDot = (index) => {
    if(index === 0){
      dots[index].classList.add('active');
      dots[maxSlide - 1].classList.remove('active');
    }else{
      dots[index].classList.add('active');
      dots[index - 1].classList.remove('active');
    }
  };

  const slideFunc = (x) => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - 2 * x)}%)`;
    });
  }

  const nextSlide = () => {
    if(curSlide === maxSlide - 1){
      curSlide = 0;
    }else{
      curSlide++;
    }

    slideFunc(curSlide);
    activeDot(curSlide);
  }

  const prevSlide = () => {
    if(curSlide === 0){
      curSlide = maxSlide - 1;
    }else{
      curSlide--;
    }

    slideFunc(curSlide);
    activeDot(curSlide);
  }

  const init = () =>{
    slideFunc(0)
    activeDot(0)
  };
  init();

  leftArrow.addEventListener('click', prevSlide);
  rightArrow.addEventListener('click', nextSlide);

};

slider();



