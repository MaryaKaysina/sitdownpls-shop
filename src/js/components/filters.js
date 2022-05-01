const catalogPage = document.querySelector('.catalog');

if(catalogPage) {
  $( function() {
    const aside = document.querySelector('.catalog__wrap--aside');
    const filterLg = document.querySelector('.catalog__filter-lg');
    const filterMain = document.querySelector('.filter--main');
    const filterAdd = document.querySelector('.filter--add');
    const containerTags = document.querySelector('.catalog__tags');
    const filters = document.querySelectorAll('.filter__wrap input');

    const filterInputs = document.querySelectorAll('.input__price');
    const sliderRange = document.getElementById('slider-range');
    const sliderHandle = document.querySelectorAll('.ui-slider-handle');
    const minPrice = document.querySelector('.input__price--min');
    const maxPrice = document.querySelector('.input__price--max');

    function toggleFilterMain() {
      if(window.innerWidth <= 1270) {
        filterMain.remove();
        filterLg.prepend(filterAdd);
      } else {
        aside.prepend(filterMain);
        filterAdd.remove();
      }
    }

    function changeMaxPrice() {
      let addTagsPrice = [];
      const oldTagsPrice = document.querySelectorAll('.tag__item--price');

      oldTagsPrice.forEach( e => e.remove());

      if(maxPrice.value > 0) {
        addTagsPrice.push(`До ${maxPrice.value}`);

        let newTagAddPrice = document.createElement('li');
        newTagAddPrice.classList.add('tag__item');
        newTagAddPrice.classList.add('tag__item--price');
        newTagAddPrice.innerHTML = `<span>${addTagsPrice}</span>
          <button class="tag__close"></button>`;

        containerTags.append(newTagAddPrice);

        const tagClose = document.querySelectorAll('.tag__close');
        let text = '';

        tagClose.forEach(btn => {
          btn.addEventListener('click', (event) => {
            event.preventDefault();
            text = event.target.parentElement.innerText;
            if (text.substring(0, 3) === 'До ') {
              event.target.parentElement.classList.add('is-hide');
              maxPrice.value = 240000;
              const width = (maxPrice.value - parseInt(minPrice.value, 10)) * 100 / maxWidth;
              $('.ui-slider-handle')[1].style.cssText = `left: 100%;`;
              $('.ui-slider-range')[0].style.cssText = `left: calc(100% - ${width}%); width: ${width}%`;
            }
          })
        })
      }
    }

    function createTags() {
      toggleFilterMain();

      const filterCategory = document.querySelectorAll('.filter__checkbox--category');
      const filterSale = document.querySelectorAll('.filter__checkbox--sale');
      const filterColor = document.querySelectorAll('.filter__checkbox--color');

      let addTagsCategory = [];
      let addTagsSale = [];
      let addTagsColor = [];

      containerTags.innerHTML = '';

      // category tags
      filterCategory.forEach(check => {
        if(check.childNodes[1].hasAttribute('checked') || check.childNodes[1].checked) {
          addTagsCategory.push(check.childNodes[1].value);
        };
      })

      addTagsCategory.forEach(e => {
        let newTagAddCategory = document.createElement('li');
        newTagAddCategory.classList.add('tag__item');
        newTagAddCategory.classList.add('tag__item--category');
        newTagAddCategory.innerHTML = `<span>${e}</span>
          <button class="tag__close"></button>`;
        containerTags.append(newTagAddCategory);
      })

      // price tags
      changeMaxPrice();

      sliderRange.addEventListener('click', () => {
        changeMaxPrice();
      })

      sliderHandle.forEach(e => {
        e.addEventListener('click', () => {
          changeMaxPrice();
        })
      })

      maxPrice.addEventListener('change', () => {
        changeMaxPrice();
      })

      // sale tags
      filterSale.forEach(check => {
        if(check.childNodes[1].hasAttribute('checked') || check.childNodes[1].checked) {
          addTagsSale.push(check.childNodes[1].value);
        };
      })

      addTagsSale.forEach(e => {
        let newTagAddSale = document.createElement('li');
        newTagAddSale.classList.add('tag__item');
        newTagAddSale.classList.add('tag__item--sale');
        newTagAddSale.innerHTML = `<span>${e}</span>
          <button class="tag__close"></button>`;
        containerTags.append(newTagAddSale);
      })

      // color tags
      filterColor.forEach(check => {
        if(check.childNodes[1].hasAttribute('checked') || check.childNodes[1].checked) {
          addTagsColor.push(check.childNodes[1].value);
        };
      })

      addTagsColor.forEach(e => {
        let newTagAddColor = document.createElement('li');
        newTagAddColor.classList.add('tag__item');
        newTagAddColor.classList.add('tag__item--color');
        newTagAddColor.innerHTML = `<span>${e}</span>
          <button class="tag__close"></button>`;
        containerTags.append(newTagAddColor);
      })
    }

    function deleteTags() {
      const tagClose = document.querySelectorAll('.tag__close');
      let text = '';

      tagClose.forEach(btn => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          text = event.target.parentElement.innerText;
          filters.forEach(e => {
            if (text.trim() === e.value.trim()) {
              event.target.parentElement.classList.add('is-hide');
              e.checked = false;
            }
          })
        })
      })
    }

    createTags();
    deleteTags();

    window.addEventListener('resize', () => {
      toggleFilterMain();
      deleteTags();
    });

    filters.forEach(filter => {
      filter.addEventListener('change', () => {
        createTags();
        deleteTags();
      })
    })

    const minWidth = 0;
    const maxWidth = 240000;

    minPrice.value = 2000;
    maxPrice.value = 150000;

    filterInputs.forEach(e => e.addEventListener('change', () => {
      let filterInputsIntMin = parseInt(filterInputs[0].value, 10);
      let filterInputsIntMax = parseInt(filterInputs[1].value, 10);

      if (filterInputsIntMin === filterInputsIntMax || filterInputsIntMin > filterInputsIntMax) {
        filterInputs[0].value = Math.min(filterInputsIntMin, maxWidth);
        filterInputs[1].value = filterInputs[0].value;
        const left = filterInputs[1].value * 100 / maxWidth;
        $('.ui-slider-handle')[0].style.cssText = `left: ${left}%;`;
        $('.ui-slider-handle')[1].style.cssText = `left: ${left}%;`;
        $('.ui-slider-range')[0].style.cssText = `left: 0%; width: 0%`;
      };
      if (e.value <= minWidth) {
        e.value = minWidth;
        const width = filterInputs[1].value * 100 / maxWidth;
        $('.ui-slider-handle')[0].style.cssText = `left: 0%;`;
        $('.ui-slider-range')[0].style.cssText = `left: 0%; width: ${width}%`;
      };
      if (e.value >= maxWidth) {
        e.value = maxWidth;
        const width = filterInputs[1].value * 100 / maxWidth;
        $('.ui-slider-handle')[1].style.cssText = `left: 100%;`;
        $('.ui-slider-range')[0].style.cssText = `left: calc(100% - ${width}%); width: ${width}%`;
        if(Math.min(filterInputsIntMin, maxWidth) === maxWidth) {
          $('.ui-slider-range')[0].style.cssText = `left: 0%; width: 0%`;
        }
      };
      if (filterInputsIntMin < filterInputsIntMax) {
        const width = (filterInputs[1].value - filterInputs[0].value) * 100 / maxWidth;
        const left = filterInputs[0].value * 100 / maxWidth;
        $('.ui-slider-handle')[0].style.cssText = `left: ${left}%;`;
        $('.ui-slider-handle')[1].style.cssText = `left: ${left + width}%;`;
        $('.ui-slider-range')[0].style.cssText = `left: ${left}%; width: ${width}%`;
      };
    }))

    $( "#slider-range" ).slider({
      range: true,
      min: minWidth,
      max: maxWidth,
      step: 1000,
      values: [ 2000, 150000 ],
      slide: function( event, ui ) {
        $( ".input__price--min" ).val( ui.values[ 0 ] );
        $( ".input__price--max" ).val( ui.values[ 1 ] );
      }
    });

    $( ".input__price--min" ).val( ui.values[ 0 ] ).slider( "values", 0 );
    $( ".input__price--max" ).val( ui.values[ 1 ] ).slider( "values", 1 );
  });
}
