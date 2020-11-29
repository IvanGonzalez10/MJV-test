export const BreedsComm = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const response = await fetch(url);
  const breed = await response.json();

  return breed;
};
