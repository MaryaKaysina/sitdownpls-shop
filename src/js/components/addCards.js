const renderCards = (cards, count, countView, container) => {
  container.innerHTML = '';
  cards.forEach((card, key) => {
    if (key < count) {
      const cardItem = document.createElement('li');
      cardItem.classList.add('card__wrap');
      if (key > countView - 1) cardItem.classList.add('card__wrap--hide');
      cardItem.innerHTML = `
        <article class="card__item card__item--rating">
        <span class="card__label card__rating">${card.rating}</span>
        <picture class="card__pic card__pic--rating">
          <img class="card__img ${!card.imgHeight ? '' : 'card__img--height'}" src="${card.img}" alt="${card.alt}" loading="lazy" width="${card.width}" height="${card.height}">
        </picture>
        <h3 class="card__title card__title--rating ${!card.titleBig ? '' : 'card__title--big'}">
          <a href="#" class="card__link">${card.title}</a>
        </h3>
        <div class="card__price-wrap">
          <span class="card__price">${card.price}</span>
        </div>
        <button class="btn btn--card btn--card-rating">Купить</button>
      </article>
      `;
      container.append(cardItem);
    }
  })
}

const getData = () => {
  fetch('/db/cards.json')
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('cards', JSON.stringify(data));
    });
}

getData();
