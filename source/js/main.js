import './map.js';
import './validity.js';
const mainNav = document.querySelector('.main-nav');
const inputSearch = document.querySelector('.user-navigation__input-search');
const menuToggle = document.querySelector('.user-navigation__link--menu-toggle');
const selectSingle = document.querySelector('.form__select');
const selectSingleTitle = selectSingle.querySelector('.form__select-title');
const selectSingleInputTitle = selectSingle.querySelector('.form__select-input-title');
const selectSingleLabels = selectSingle.querySelectorAll('.form__select-label');
const selectTitleLabel = selectSingle.querySelector('.form__select-label-title');
const selectTitleWrapper = selectSingle.querySelector('.form__select-title-wrapper');
const form = document.querySelector('.form');


if (window.innerWidth < 1300) {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
  inputSearch.classList.remove('user-navigation__input-search--opened');
  inputSearch.classList.add('user-navigation__input-search--closed');
  menuToggle.classList.remove('user-navigation__link--menu-opened');
  menuToggle.classList.add('user-navigation__link--menu-closed');
} else {
  mainNav.classList.add('main-nav--opened');
  mainNav.classList.remove('main-nav--closed');
  inputSearch.classList.add('user-navigation__input-search--opened');
  inputSearch.classList.remove('user-navigation__input-search--closed');
  menuToggle.classList.add('user-navigation__link--menu-opened');
  menuToggle.classList.remove('user-navigation__link--menu-closed');
}

//Select
selectSingleTitle.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener('click', (evt) => {
    selectTitleWrapper.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
    selectSingleInputTitle.setAttribute('value', evt.target.textContent);
    if (selectSingleInputTitle.value !== '') {
      selectTitleLabel.style.transform = 'translateY(-22px) scale(0.66)';
    }
  });
}


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  for(let [name, value] of formData) {
    console.log(`${name} = ${value}`);
  }
})





