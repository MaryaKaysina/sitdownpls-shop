const index = document.querySelector('.index');

if (index) {
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
        320: {
          slidesPerGroup: 1,
        },
        701: {
          slidesPerGroup: 2,
        },
        993: {
          slidesPerGroup: 3,
        },
      },
    });

    const swiperUseful = new Swiper('.swiper--useful', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 32,
      navigation: {
        nextEl: '.swiper-button-next--useful',
        prevEl: '.swiper-button-prev--useful',
      },
      breakpoints: {
        470: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        993: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1025: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
    });
  });
}
