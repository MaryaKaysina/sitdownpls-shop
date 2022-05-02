const contactsPage = document.querySelector('.contacts-page');

if(contactsPage) {
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
          center: [55.756629, 37.623115],
          zoom: 14,
      });

    var myPlacemark1 = new ymaps.Placemark([55.753777, 37.636060], {
      balloonContentBody:
      `<div class="ballon">
        <h2 class="ballon__title">SitDownPls на Солянке </h2>
        <p class="ballon__subtitle">м. Китай-город, ул. Солянка, д.24</p>
        <a href="tel:+74958854547" class="header__phone phone" aria-label="Позвонить по телефону">
          <svg class="phone__icon" width="22" height="22"><use xlink:href="img/sprite.svg#phone"></use></svg>
          +7 (495) 885-45-47</a>
        <p class="ballon__text ballon__text--line">Часы работы: <span class="ballon__text--content">с 10:00 до 21:00</span></p>
        <p class="ballon__text">Что здесь: <span class="ballon__text--content">шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</span></p>
      </div>
      <button class="popup__close" aria-label="Попап: Изображения дивана! Кнопка закрыть" data-close="popup-img">
        <svg class="popup__close-icon" width="12" height="12"><use xlink:href="img/sprite.svg#close"></use></svg>
      </button>`
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map/point.svg',
      iconImageSize: [32, 22],
      iconImageOffset: [0, 0]
    });

    var myPlacemark2 = new ymaps.Placemark([55.767511, 37.649620], {
      balloonContentBody:
      `<div class="ballon">
        <h2 class="ballon__title">SitDownPls в Харитоньевском переулке </h2>
        <p class="ballon__subtitle">м. Красные Ворота, ул. Большой Харитоньевский переулок, 21с4</p>
        <a href="tel:+74958854547" class="header__phone phone" aria-label="Позвонить по телефону">
          <svg class="phone__icon" width="22" height="22"><use xlink:href="img/sprite.svg#phone"></use></svg>
          +7 (495) 885-45-47</a>
        <p class="ballon__text ballon__text--line">Часы работы: <span class="ballon__text--content">с 10:00 до 21:00</span></p>
        <p class="ballon__text">Что здесь: <span class="ballon__text--content">шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</span></p>
      </div>
      <button class="popup__close" aria-label="Попап: Изображения дивана! Кнопка закрыть" data-close="popup-img">
        <svg class="popup__close-icon" width="12" height="12"><use xlink:href="img/sprite.svg#close"></use></svg>
      </button>`
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map/point.svg',
      iconImageSize: [32, 22],
      iconImageOffset: [0, 0]
    });

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);

    myPlacemark1.events.add('balloonopen', function (e) {
      const close = document.querySelector('.popup__close');
      close.addEventListener('click', () => {
        myMap.balloon.close();
      })
    });
    myPlacemark2.events.add('balloonopen', function (e) {
      const close = document.querySelector('.popup__close');
      close.addEventListener('click', () => {
        myMap.balloon.close();
      })
    });

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    const searchBtn = document.querySelector('.btn--contacts-main');
    const searchInput = document.querySelector('.contacts-main__input');
    const notFound = document.querySelector('.not-found');
    const mapBlock = document.getElementById('map');
    const ballon1 = myPlacemark1.properties._data.balloonContentBody;
    const ballon2 = myPlacemark2.properties._data.balloonContentBody;

    console.log(myPlacemark1);

    searchBtn.addEventListener('click', e => {
      e.preventDefault();
      if (searchInput.value.length > 0) {
        if(ballon1.toLowerCase().includes(searchInput.value.toLowerCase())) {
          myPlacemark1.balloon.open();
          const close = document.querySelector('.popup__close');
          close.focus();
          close.addEventListener('click', () => {
            myMap.balloon.close();
          })
        } else if(ballon2.toLowerCase().includes(searchInput.value.toLowerCase())) {
          myPlacemark2.balloon.open();
          const close = document.querySelector('.popup__close');
          close.focus();
          close.addEventListener('click', () => {
            myMap.balloon.close();
          })
        } else {
          notFound.classList.remove('is-hide');
          mapBlock.classList.add('is-hide');
        }
      } else {
        notFound.classList.add('is-hide');
        mapBlock.classList.remove('is-hide');
      }
    })
  }
}
