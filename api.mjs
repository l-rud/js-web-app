// getBreeds function returns Promise that fetches breeds of cats
export function getBreeds() {
    return fetch("https://api.thecatapi.com/v1/breeds");
}