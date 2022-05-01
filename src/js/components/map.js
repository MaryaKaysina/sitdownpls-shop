const contactsPage = document.querySelector('.contacts-page');

if(contactsPage) {
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
          center: [55.756629, 37.623115],
          zoom: 14,
      });

    var myPlacemark = new ymaps.Placemark([55.753777, 37.636060], {
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

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);

    myPlacemark.events.add('balloonopen', function (e) {
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

    // function checkWidth() {
    //   if(window.innerWidth < 1361) {
    //     myMap.setCenter([55.75846806898367,37.60108849999989]);
    //   } else {
    //     myMap.setCenter([55.749438, 37.617937]);
    //   }
    //   if(window.innerWidth < 1250) {
    //     myMap.setCenter([55.76083952313602,37.61705300805652]);
    //   }
    //   if(window.innerWidth < 861) {
    //     myMap.setCenter([55.760161979584744,37.61018655297841]);
    //   }
    //   //
    // }

    // checkWidth();

    // let timer;
    // window.addEventListener('resize', () => {
    //   clearTimeout(timer);
    //   timer = setTimeout(checkWidth, 500);
    // });
  }
}
