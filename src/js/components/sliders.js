$(document).ready(function() {
  const swiperHero = new Swiper('.swiper--hero', {
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination--hero',
      type: 'bullets',
      clickable: true,
    },
  });

  const swiperSpecial = new Swiper('.swiper--special', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next--special',
      prevEl: '.swiper-button-prev--special',
    },
    breakpoints: {
      701: {
        slidesPerGroup: 2,
      },
      993: {
        slidesPerGroup: 3,
      },
    },
  });
});

