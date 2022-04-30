const cardPage = document.querySelector('.card-page');

function createPopup() {
  const body = document.querySelector('body');
  const popup = document.querySelector('.popup');

  body.classList.add('is-popup');
  popup.classList.add('is-active');

  const closePopup = document.querySelectorAll('.popup__close');
  closePopup.forEach(btn => {
    if(popup.classList[0] === btn.dataset.close) btn.focus();
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      body.classList.remove('is-popup');
      popup.classList.remove('is-active');
    });
  })

  popup.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("popup")) {
      popup.classList.remove('is-active');
      body.classList.remove('is-popup');
    } else return;
  });
}

if (cardPage) {
  const body = document.querySelector('body');
  const popupImgLink = document.querySelector('.card-main__images');
  const popupBtnBuy = document.querySelector('.btn--card-main');
  const popupImg = document.querySelector('.popup-img');
  const popupBuy = document.querySelector('.popup-buy');
  const overlay = document.querySelectorAll('.overlay');
  const closePopup = document.querySelectorAll('.popup__close');

  function addPopup (click, popup) {
    click.addEventListener('click', e => {
      e.preventDefault();

      body.classList.add('is-popup');
      popup.classList.add('is-active');

      closePopup.forEach(btn => {
        if(popup.classList[0] === btn.dataset.close) btn.focus();
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          body.classList.remove('is-popup');
          popup.classList.remove('is-active');
        });
      })

      overlay.forEach(over => {
        over.addEventListener('click', () => {
          body.classList.remove('is-popup');
          popup.classList.remove('is-active');
        })
      })
    })
  }

  addPopup(popupImgLink, popupImg);
  addPopup(popupBtnBuy, popupBuy);
}
