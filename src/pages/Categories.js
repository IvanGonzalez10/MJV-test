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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true)
    DogComm(breedId).then((newDog) => {
      setDog(newDog);
      setLoading(false)
    });
  };
  return (
    <>
      <Breeds updateDog={updateDog} />
      <Container dog={dog} updateDog={updateDog} loading={loading} />
    </>
  );
};
