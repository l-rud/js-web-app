// getBreeds function returns a Promise that fetches breeds of cats
export function getBreeds() {
    return fetch("https://api.thecatapi.com/v1/breeds");
}

// getRandomCatInfo function returns a Promise that fetches 
// a random cat information by breed id
export function getRandomCatInfo(breedId) {
    return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=" + breedId);
}  