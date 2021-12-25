const index = document.querySelector('.index');

if (index) {
  let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999) - 999-99-99");
  const contactBtn = document.querySelector('.btn--contacts');
  const contactsInput = document.querySelectorAll('.contacts__input');

  im.mask(selector);

  contactBtn.addEventListener('click', function() {
    contactsInput.forEach(i => i.classList.add('is-success'));
  });

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      },
      mail: {
        required: true,
        email: true
      },
    },
    messages: {
      name: 'Упс: не должно быть цифр, длина должна быть от 2 до 30 символов',
      tel: 'Упс: слишком мало цифр',
      mail: 'Упс: e-mail должен быть в формате login@example.com',
    },
    submitHandler: function(form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      createPopup();
      contactsInput.forEach(i => i.classList.remove('is-success'));
      form.reset();
    }
  });
}
