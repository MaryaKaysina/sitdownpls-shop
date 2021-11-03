$(document).ready(function() {
  const swiper = new Swiper('.swiper--hero', {
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
});

