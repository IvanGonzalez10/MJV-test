import React, { useState, useEffect } from "react";
import { Select, Div, H1 } from "./styles";
import { BreedsComm } from "../../Apis/BreedsComm";

export const Breeds = ({ updateDog }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    BreedsComm().then((newBreeds) => {
      setBreeds(newBreeds);
    });
  };
  return (
    <Div>
      <Select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </Select>
      <H1>Clickea encima de la imagen para ver más fotos</H1>
    </Div>
  );
};
