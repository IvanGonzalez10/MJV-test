import React, { useState, useEffect } from "react";
import { Breeds } from "../components/Breeds/Breeds";
import { Container } from "../components/Container/Container";
import { DogComm } from "../Apis/DogComm";

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: "",
  },
};

export const Categories = () => {
  const [dog, setDog] = useState(initialDog);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    DogComm(breedId).then((newDog) => {
      setDog(newDog);
    });
  };
  return (
    <>
      <Breeds updateDog={updateDog} />
      <Container dog={dog} updateDog={updateDog} />
    </>
  );
};
