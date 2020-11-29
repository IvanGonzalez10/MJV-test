import React, { useState, useEffect } from "react";
import { Select, Div } from "./styles";
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
    </Div>
  );
};
