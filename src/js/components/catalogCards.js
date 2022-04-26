const catalog = document.querySelector('.catalog');

if (catalog) {
  const aside = document.querySelector('.catalog__wrap--aside');
  const filterLg = document.querySelector('.catalog__filter-lg');
  const filterMain = document.querySelector('.filter--main');
  const filterAdd = document.querySelector('.filter--add');
  const cardsList = JSON.parse(localStorage.getItem('cards'));
  const cardsListCatalog = document.querySelector('.card__list');
  const addCardsBtn = document.querySelector('.catalog__btns');
  const btns = document.querySelectorAll('.btns__item');
  const filters = document.querySelectorAll('.filter__wrap input');
  const filterPrice = document.querySelector('.input__price--max');
  const search = document.querySelector('.header__search');
  const searchBtn = document.querySelector('.header__btn-search');
  let newCardList = [];
  let filterList = [];

  function toggleFilterMain() {
    if(window.innerWidth <= 1270) {
      filterMain.remove();
      filterLg.prepend(filterAdd);
    } else {
      aside.prepend(filterMain);
      filterAdd.remove();
    }
  }

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
  });

  search.addEventListener('input', (e) => {
    e.preventDefault();
    searchCards(search.value);
  });

  function searchCards(str) {
    let filterListSearch = [];
    if(str) {
      filterListSearch.push(cardsList.filter(card => card.title.toLowerCase().indexOf(str.toLowerCase()) > -1));
      let searchStr = filterListSearch.flat();
      if(searchStr.length !== 0) {
        checkWidth(searchStr);
      }
    } else {
      checkWidth(cardsList);
    }
  }

  function filterCards(cardsList, filterList) {
    let filterListCategory = [];
    let filterListSale = [];
    let filterListColor = [];
    let filterListPrice = [];
    newCardList = [];

    if(filterPrice.value.length != 0) {
      filterList.push(filterPrice.value);
    }

    filterList.forEach(filter => {
      filterListCategory.push(cardsList.filter(card => card.category === filter));
      filterListSale.push(cardsList.filter(card => card.sale === filter));
      filterListColor.push(cardsList.filter(card => card.color === filter));
      filterListPrice.push(cardsList.filter(card => parseInt(card.price.replace(' ',''), 10) <= parseInt(filter, 10)));
    });

    let category = filterListCategory.flat();
    let sale = filterListSale.flat();
    let color = filterListColor.flat();
    let price = filterListPrice.flat();

    category = [...new Set(category)];
    sale = [...new Set(sale)];
    color = [...new Set(color)];
    price = [...new Set(price)];

    let maxArr = Math.max(category.length, sale.length, color.length, price.length);
    if (category.length === maxArr) {
      newCardList = category;
      if (color.length !== 0) {
        newCardList = newCardList.filter(i => color.includes(i));
      }
      if (sale.length !== 0) {
        newCardList = newCardList.filter(i => sale.includes(i));
      }
      if (price.length !== 0) {
        newCardList = newCardList.filter(i => price.includes(i));
      }
    }

    if (color.length === maxArr) {
      newCardList = color;
      if (category.length !== 0) {
        newCardList = newCardList.filter(i => category.includes(i));
      }
      if (sale.length !== 0) {
        newCardList = newCardList.filter(i => sale.includes(i));
      }
      if (price.length !== 0) {
        newCardList = newCardList.filter(i => price.includes(i));
      }
    }

    if (sale.length === maxArr) {
      newCardList = sale;
      if (color.length !== 0) {
        newCardList = newCardList.filter(i => color.includes(i));
      }
      if (category.length !== 0) {
        newCardList = newCardList.filter(i => category.includes(i));
      }
      if (price.length !== 0) {
        newCardList = newCardList.filter(i => price.includes(i));
      }
    }

    if (price.length === maxArr) {
      newCardList = price;
      if (color.length !== 0) {
        newCardList = newCardList.filter(i => color.includes(i));
      }
      if (sale.length !== 0) {
        newCardList = newCardList.filter(i => sale.includes(i));
      }
      if (category.length !== 0) {
        newCardList = newCardList.filter(i => category.includes(i));
      }
    }

    return newCardList;
  }

  function filterCheck() {
    filterList = [];

    filters.forEach(filter => {
      if(filter.checked) {
        filterList.push(filter.value);
      }
    })

    if(filterList.length !== 0) {
      let filterCardsList = filterCards(cardsList, filterList);
      checkWidth(filterCardsList);
    } else {
      newCardList = [];
      checkWidth(cardsList);
    }
  }

  function checkWidth(list) {
    let width = window.innerWidth;

    if (width > 992) {
      renderCards(list, list.length, 9, cardsListCatalog);

      btns.forEach(btn => {
        btn.classList.add('btn--hide');
        if (list.length / 9 >= 1) btn.classList.remove('btn--hide');
      });
    };
    if (width <= 992) {
      renderCards(list, list.length, 6, cardsListCatalog);

      btns.forEach(btn => {
        btn.classList.add('btn--hide');
        if (list.length / 6 >= 1) btn.classList.remove('btn--hide');
      });
    };

    const cards = document.querySelectorAll('.catalog .card__wrap');

    addCardsBtn.addEventListener('click', (event) => {
      cards.forEach((card, i) => {
        if(card.classList.contains('card__wrap--hide')) {
          if (width > 992) card.classList.remove('card__wrap--hide');
          if (width <= 992) {
            if(event.path[0].innerText == 1) {
              if (i + 1 > 0 && i + 1 < 7) {
                card.classList.remove('card__wrap--hide');
              }
            }
            if(event.path[0].innerText == 2) {
              if (i + 1 > 6 && i + 1 < 13) {
                card.classList.remove('card__wrap--hide');
              }
            }
            if(event.path[0].innerText == 3) {
              if (i + 1 > 12 && i + 1 < 19) {
                card.classList.remove('card__wrap--hide');
              }
            }
          }
        } else {
          card.classList.add('card__wrap--hide');
        }
      });

      let targetBtn = event.target;
      btns.forEach(e => {
        e.classList.remove('is-active');
      });
      if(targetBtn.parentElement.classList.contains('btns__item')) {
        targetBtn.parentElement.classList.add('is-active');
      }
      if(targetBtn.classList.contains('btns__item')) {
        targetBtn.classList.add('is-active');
      }
    });
  }

  filterCheck();

  filters.forEach(filter => {
    filter.addEventListener('change', () => {
      filterCheck();
    })
  })

  window.addEventListener('resize', () => {
    filterCheck();
  });
}
