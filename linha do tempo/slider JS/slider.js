let totalSlides = ducument.querrySelectorAll(".slider--item").length
let sliderWidth = ducument.querySelector('.slider').clientWidth;

ducument.querySelector(".slider--width").style.width = `{sliderWidth * totalSlider}px`;

ducument.querySelector(".slider--controls").style.width = 
`${sliderWidth}px`;
ducument.querySelector(".slider--controls").style.height = 
`${ducument.querySelector(".slider").clientHeight}px`

function goPrev(){
  currentSlide--;
  if(currentSlide < 0){
    currentSlide = totalSlides -1;
  }
  updateMargin();
}
function goNext(){
  currentSlide++;
  if(currentSlide > (totalSlides-1)){
    currentSlide = 0;
  }
  updateMargin();
}
function updateMargin(){
  let sliderItemWidth = Document.querySelector('.slider').clientWidth;
  let newMargin = ( currentSlide * sliderItemWidth );
  ducument.querySelector('.slider--width').style.marginLeft = `${newMargin}px`;
}

setInterval(goNext, 5000);