// calculate match index
export function calculateMatch(document, breed) {
    const adaptabilityElement = document.getElementById("adaptability");
    const affectionElement = document.getElementById("affection");
    const energyElement = document.getElementById("energy");
    const intelligenceElement = document.getElementById("intelligence");
    const socialElement = document.getElementById("social");
    const strangerElement = document.getElementById("stranger");
    const vocalisationElement = document.getElementById("vocalisation");
  
    const adaptability = parseInt(adaptabilityElement.value);
    const affection = parseInt(affectionElement.value);
    const energy = parseInt(energyElement.value);
    const intelligence = parseInt(intelligenceElement.value);
    const social = parseInt(socialElement.value);
    const stranger = parseInt(strangerElement.value);
    const vocalisation = parseInt(vocalisationElement.value);
  
    return Math.abs(breed.adaptability - adaptability)
      + Math.abs(breed.affection_level - affection)
      + Math.abs(breed.energy_level - energy)
      + Math.abs(breed.intelligence - intelligence)
      + Math.abs(breed.social_needs - social)
      + Math.abs(breed.stranger_friendly - stranger)
      + Math.abs(breed.vocalisation - vocalisation);
  }

  // sort breeds to maximize similarity (minimize match function)
  export function sortBreeds(document, breeds) {
    breeds.sort((a,b) => {
      return calculateMatch(document, a) - calculateMatch(document, b);
    });
  }