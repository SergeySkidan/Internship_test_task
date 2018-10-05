import axios from 'axios';
import store from '../store';
import { getClientsSuccess } from '../actions/client-actions';

export function getClients() {
  // 1. Создаём новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();
  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('GET', 'clients.json', false);
  // 3. Отсылаем запрос
  xhr.send();
  // 4. Если код ответа сервера не 200, то это ошибка
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  } else {
    // вывести результат
    var a = JSON.parse(xhr.responseText);// responseText -- текст ответа.
    var b = [];

  for (var i = 0; i < a.length; i++) {

    var client = {
      avatar: a[i].general.avatar,
      firstName: a[i].general.firstName,
      lastName: a[i].general.lastName,
      title: a[i].job.title,
      company: a[i].job.company,
      email: a[i].contact.email,
      phone: a[i].contact.phone,
      street: a[i].address.street,
      city: a[i].address.city,
      zipCode: a[i].address.zipCode,
      country: a[i].address.country
    };
  b.push(client);
  }
      return b;
  }
  // return axios.get('http://localhost:3001/clients')
  //   .then(response => {
  //     store.dispatch(getClientsSuccess(response.data));
  //     return response;
  //   });
}

export function searchClients(query) {

  // 1. Создаём новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();
  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('GET', 'clients.json', false);
  // 3. Отсылаем запрос
  xhr.send();
  // 4. Если код ответа сервера не 200, то это ошибка
  if (xhr.status != 200) {
  // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  } else {
  // вывести результат
  var a = JSON.parse(xhr.responseText);// responseText -- текст ответа.
  var b = [];

  for (var i = 0; i < a.length; i++) {
    var client = {
      avatar: a[i].general.avatar,
      firstName: a[i].general.firstName,
      lastName: a[i].general.lastName,
      title: a[i].job.title,
      company: a[i].job.company,
      email: a[i].contact.email,
      phone: a[i].contact.phone,
      street: a[i].address.street,
      city: a[i].address.city,
      zipCode: a[i].address.zipCode,
      country: a[i].address.country
    };
  b.push(client);
  }
}
//если запрос undef
if(!!!query){
query ='';
}
var filterClients = [];
for (var i = 0; i < b.length; i++) {
  for (var key in b[i]) {
    //убираем из поиска символы строки запроса картинки http
  if((b[i][key].substring(0,8)).indexOf("https://") == -1 && (b[i][key].toLowerCase()).indexOf(query.toLowerCase()) != -1){
    //  alert(b[i][key]);
      filterClients.push(b[i]);
      break;
  }
  }
}
return filterClients;

  // return axios.get('http://localhost:3001/clients?q='+ query)
  //   .then(response => {
  //     store.dispatch(getClientsSuccess(response.data));
  //     return response;
  //   });
}
