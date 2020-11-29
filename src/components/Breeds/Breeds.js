import React, { useState, useEffect } from "react";
import { Select, Div, H1, H2 } from "./styles";
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
      <H1>Menu de categorias</H1>
      <H2>Elige la raza del perro que quieras ver</H2>
      <Select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </Select>
    </Div>
  );
};
