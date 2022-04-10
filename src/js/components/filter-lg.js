const filterBtns = document.querySelectorAll('.btn.filter__subtitle');
const filterContent = document.querySelectorAll('.filter-lg .filter__wrap');

filterBtns.forEach(btn => {
  // btn.classList.remove('is-active');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    let filter = btn.dataset.filter;
    filterContent.forEach(content => {
      // content.classList.remove('is-active');
      if(content.dataset.open === filter) {
        content.classList.toggle('is-active');
        btn.classList.toggle('is-active');
      }
    })
  })
})
