$(document).ready(function() {
  const regions = document.querySelector('.header__select');
  const filter = document.querySelector('.header__filter');

  const choicesRegions = new Choices(regions, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    classNames: {
      containerOuter: 'choices choices__region',
      list: 'choices__list--region',
      flippedState: '',
    },
  });

  const choicesFilter = new Choices(filter, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    classNames: {
      containerOuter: 'choices choices__filter',
      list: 'choices__list--filter',
      flippedState: '',
    },
  });
});
