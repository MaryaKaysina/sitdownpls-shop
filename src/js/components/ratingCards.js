const cardsList = JSON.parse(localStorage.getItem('cards'));
const cardsListRating = document.querySelector('.card__list--rating');
const ratingCountAll = 12;
const addCardsBtn = document.querySelector('.rating .btn--primary');

function checkWidth() {
  let width = window.innerWidth;
  addCardsBtn.classList.remove('btn--hide');
  if (width > 1270) renderCards(cardsList, ratingCountAll, 8, cardsListRating);
  if (width <= 1270) renderCards(cardsList, ratingCountAll, 6, cardsListRating);

  const cards = document.querySelectorAll('.rating .card__wrap');

  addCardsBtn.addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.remove('card__wrap--hide');
    });
    addCardsBtn.classList.add('btn--hide');
  });
}

checkWidth();

window.addEventListener('resize', () => {
  checkWidth();
});
