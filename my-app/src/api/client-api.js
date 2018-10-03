import axios from 'axios';
import store from '../store';
import { getClientsSuccess, getInfoSuccess } from '../actions/client-actions';

export function getClients() {
  // // 1. Создаём новый объект XMLHttpRequest
  // var xhr = new XMLHttpRequest();
  //
  // // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  // xhr.open('GET', 'clients.json', false);
  //
  // // 3. Отсылаем запрос
  // xhr.send();
  //
  // // 4. Если код ответа сервера не 200, то это ошибка
  // if (xhr.status != 200) {
  //   // обработать ошибку
  //   alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  // } else {
  //   // вывести результат
  //   alert( xhr.responseText ); // responseText -- текст ответа.
  // }

  return axios.get('http://localhost:3001/clients')
    .then(response => {
      store.dispatch(getClientsSuccess(response.data));
      return response;
    });
}

export function searchClients(query = '') {
  return axios.get('http://localhost:3001/client?q='+ query)
    .then(response => {
      store.dispatch(getClientsSuccess(response.data));
      return response;
    });
}

export function getInfo(clientInfo = '') {
  return axios.get('http://localhost:3001/client?q='+ clientInfo)
    .then(response => {
      store.dispatch(getClientsSuccess(response.data));
      return response;
    });
}
