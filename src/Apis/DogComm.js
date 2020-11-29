export const DogComm = async (breedId) => {

     const url = !breedId || breedId === 0
    ? "https://api.thedogapi.com/v1/images/search"
    : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId
  
  const response = await fetch(url);
  const [data] = await response.json();

  let { url: dogImage, breeds: [breed] } = data;

  if(!breed) {
    breed = {
      id:0,
      name: 'random'
    }
  }

  const dog = {
    dogImage,
    breed,
  }

  return dog;
};