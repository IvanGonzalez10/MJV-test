import React from "react";
import { Div, DivDos, Img, DivTres } from "./styles";

export const Container = ({ dog, updateDog }) => {
  return (
    <Div>
      <DivDos onClick={() => updateDog(dog.breed.id)}>
        <Img src={dog.dogImage} alt="Dog" />
      </DivDos>
      <DivTres>
        <h1>{dog.breed.name}</h1>
      </DivTres>
    </Div>
  );
};
