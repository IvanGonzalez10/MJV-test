import React from "react";
import { Div, DivDos, Img, DivTres } from "./styles";
import { Spinner } from "../../styles/Spinner";

export const Container = ({ dog, updateDog, loading }) => {
  if (loading) return <Spinner />;
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
