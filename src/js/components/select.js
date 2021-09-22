$(document).ready(function() {
  const regions = document.querySelector('.header__select');

  const choicesRegions = new Choices(regions, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });


  $('.header__filter').click(function() {
    $(".filter__list").toggle(function (){
      $('.filter__title').text('Выбрать категорию');
      $('.filter__item').each(function () {
        $(this).click(function() {
          $('.filter__title').text($(this).text());
        });
      });
    }, function(){
      $('.filter__title').text('Выбрать категорию');
    });
  });
});
