const cardsList = JSON.parse(localStorage.getItem('cards'));
const cardsContainer = document.querySelector('.card__list--rating');
renderCards(cardsList, 12, 8, cardsContainer);

const addCardsBtn = document.querySelector('.rating .btn--primary');
const cards = document.querySelectorAll('.rating .card__wrap');
const cardsListRating = document.querySelector('.card__list--rating');

addCardsBtn.addEventListener('click', () => {
  cards.forEach(card => {
    card.classList.remove('card__wrap--hide');
  });
  addCardsBtn.classList.add('btn--hide');
});
