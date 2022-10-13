const addressId = document.querySelector('#address');
let address = `Комсомольская 27/1`;

ymaps.ready(init);

function init() {
  const suggestView = new ymaps.SuggestView('address');

  const myMap = new ymaps.Map('map', {
    center: [59.939812, 30.299842], // Нчальная точка
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  });

  const searchControl = new ymaps.control.SearchControl({
    options: {
      float: 'right',
      floatIndex: 100,
    }
  });

  myMap.controls.add(searchControl);

  function search () { // Непосредственно поиск в панели
    searchControl.search(addressId.value);
  }

  suggestView.events.add('select', () => { // поиск по выбору саджеста
    search()
  })

  addressId.addEventListener('keypress', (evt) => { // поиск по Enter
    if(evt.code === 'Enter'){
      search()
    }
  });

}
