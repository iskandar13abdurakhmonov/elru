import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

var heroSlider = new Swiper('.hero-swiper', {effect: 'slide',
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var popularSlider = new Swiper('.main-slider', {effect: 'slide',
  cssMode: true,
  slidesPerView: 6,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var selectionSlider = new Swiper('.selection-swiper', {effect: 'slide',
  cssMode: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var topHundredSlider = new Swiper('.top100-swiper', {effect: 'slide',
  cssMode: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});