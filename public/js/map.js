const addressId=document.querySelector("#address");let address="Комсомольская 27/1";function init(){const e=new ymaps.SuggestView("address"),s=new ymaps.Map("map",{center:[59.939812,30.299842],zoom:10},{searchControlProvider:"yandex#search"}),d=new ymaps.control.SearchControl({options:{float:"right",floatIndex:100}});function a(){d.search(addressId.value)}s.controls.add(d),e.events.add("select",(()=>{a()})),addressId.addEventListener("keypress",(e=>{"Enter"===e.code&&a()}))}ymaps.ready(init);