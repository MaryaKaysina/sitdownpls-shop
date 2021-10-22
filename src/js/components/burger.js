$(document).ready(function() {
  $('.burger').click(function () {
    $(this).toggleClass('burger--active');
    $('.header__menu').toggleClass('menu--active');
    $('.header__submenu').toggleClass('submenu--active');
  });
});
