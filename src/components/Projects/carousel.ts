//Flickity carousel
import Flickity from "flickity";
const options = {
accessibility: true,
prevNextButtons: true,
pageDots: true,
setGallerySize: false,
arrowShape: {
x0: 10,
x1: 60,
y1: 50,
x2: 60,
y2: 45,
x3: 15
}
};

const carousel = document.querySelector('[data-carousel]') as HTMLElement | null;
const slides = document.getElementsByClassName('carousel-cell');

if(carousel){

const flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
flkty.slides.forEach(function (slide:any, i:number) {
  const image = slides[i] as HTMLElement;
  
  const x = (slide.target + (flkty as any).x) * -1/3;
  image.style.backgroundPosition = x + 'px';
});
});
}