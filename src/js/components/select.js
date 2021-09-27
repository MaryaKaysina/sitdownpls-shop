$(document).ready(function() {
  // let text;
  const regions = document.querySelector('.header__select');
  const filter = document.querySelector('.header__filter');

  const choicesRegions = new Choices(regions, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
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
