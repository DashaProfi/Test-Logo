const email = document.querySelector('#email');
const tel = document.querySelector('#tel');

const regExpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const regExpTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const message = document.createElement('p');
message.textContent = 'Ошибка ввода';
message.classList.add('form__message-error');

email.addEventListener('change', (evt) => {
  if (!regExpEmail.test(email.value)) {
    email.before(message);
    email.classList.add('form__input--error');
  } else {
    email.classList.remove('form__input--error');
    if (document.querySelector('.form__message-error')) {
      document.querySelector('.form__message-error').remove();}
  }
})

tel.addEventListener('change', (evt) => {
  if (!regExpTel.test(tel.value)) {
    tel.before(message);
    tel.classList.add('form__input--error');
  } else {
    tel.classList.remove('form__input--error');
    if (document.querySelector('.form__message-error')) {
      document.querySelector('.form__message-error').remove();}
  }
})
// email.addEventListener('change', () => {
//   if (!regExpEmail.test(email.value)) {
//     email.classList.add('form__input-text--email-error');
//     email.classList.remove('form__input-text--email-check');
//   } else {
//     email.classList.remove('form__input-text--email-error');
//     email.classList.add('form__input-text--email-check');
//   }
// })
