import {getBreeds} from './api.mjs'

const findButton = document.getElementById('find_button');
findButton.addEventListener('click', () => {
    getBreeds()
    .then(response => response.text())
    .then(result => {
      const breeds = JSON.parse(result);
      console.log(breeds);
    })
    .catch(error => console.log('error', error));;
});