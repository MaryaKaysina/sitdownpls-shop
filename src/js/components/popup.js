function createPopup() {
  const body = document.querySelector('body');
  const popup = document.querySelector('.popup');

  body.classList.add('is-popup');
  popup.classList.add('is-active');

  const closePopup = document.querySelector('.popup__close');
  closePopup.focus();
  closePopup.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.remove('is-active');
    body.classList.remove('is-popup');
  });

  popup.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("popup")) {
      popup.classList.remove('is-active');
      body.classList.remove('is-popup');
    } else return;
  });
}
