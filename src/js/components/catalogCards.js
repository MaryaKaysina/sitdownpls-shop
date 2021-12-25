const catalog = document.querySelector('.catalog');

if (catalog) {
  const cardsList = JSON.parse(localStorage.getItem('cards'));
  const cardsListCatalog = document.querySelector('.card__list');
  const addCardsBtn = document.querySelector('.catalog__btns');

  function checkWidth() {
    let width = window.innerWidth;
    addCardsBtn.classList.remove('btn--hide');
    if (width > 1270) renderCards(cardsList, cardsList.length, 9, cardsListCatalog);
    if (width <= 1270) renderCards(cardsList, cardsList.length, 6, cardsListCatalog);

    const cards = document.querySelectorAll('.rating .card__wrap');

    // addCardsBtn.addEventListener('click', () => {
    //   cards.forEach(card => {
    //     card.classList.remove('card__wrap--hide');
    //   });
    //   addCardsBtn.classList.add('btn--hide');
    // });
  }

  checkWidth();

  window.addEventListener('resize', () => {
    checkWidth();
  });
}
