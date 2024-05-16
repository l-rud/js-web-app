import {getBreeds} from './api.mjs'
import {getRandomCatInfo} from './api.mjs'
import {calculateMatch} from './util.mjs'
import {sortBreeds} from './util.mjs'

const findButton = document.getElementById('find_button');
findButton.addEventListener('click', () => {
    getBreeds()
    .then(response => response.text())
    .then(result => {
      const breeds = JSON.parse(result);
      
      sortBreeds(document, breeds);

      // testing matching function
      breeds.forEach(element => {
        const match = calculateMatch(document, element);
        console.log("Matching index for " + element.name + ": " + match)
      });

      getRandomCatInfo(breeds[0].id)
      .then(response => response.text())
      .then(result => {
        const cats = JSON.parse(result);

        const catImage = document.getElementById("cat_image");
        catImage.src = cats[0].url;

        const breedName = document.getElementById("breed_name");
        breedName.innerText = breeds[0].name;

        const breedDescription = document.getElementById("breed_description");
        breedDescription.innerText = breeds[0].description;        
      })
      .catch(error => console.log('error', error));
    })
    .catch(error => console.log('error', error));
});