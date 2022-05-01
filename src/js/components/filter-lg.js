const catalogPage = document.querySelector('.catalog');

if(catalogPage) {
  const filterBtns = document.querySelectorAll('.btn.filter__subtitle');
  const filterContent = document.querySelectorAll('.filter-lg .filter__wrap');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      let filter = btn.dataset.filter;

      filterBtns.forEach(btn => {
        if(btn !== e.target) btn.classList.remove('is-active');

        filterContent.forEach(content => {
          if(content.dataset.open !== filter) content.classList.remove('is-active');
        })
      });

      if(!btn.classList.contains('is-active')) {
        btn.classList.add('is-active');
        filterContent.forEach(content => {
          if(content.dataset.open === filter) {
            content.classList.add('is-active');
          }
        })
      } else {
        btn.classList.remove('is-active');
        filterContent.forEach(content => {
          content.classList.remove('is-active');
        })
      }
    })
  })

  document.addEventListener('click', (e) => {
    if(!e.target.className.includes('filter__')) {
      filterBtns.forEach(btn => {
        btn.classList.remove('is-active');
      });
      filterContent.forEach(content => {
        content.classList.remove('is-active');
      });
    }
  })
}
