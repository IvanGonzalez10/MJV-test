import React from "react";
import { Div, DivDos, Img, DivTres, H1 } from "./styles";
import { Spinner } from "../../styles/Spinner";

export const Container = ({ dog, updateDog, loading }) => {
  if (loading) return <Spinner />;
  return (
    <Div>
      <DivDos onClick={() => updateDog(dog.breed.id)}>
        <Img src={dog.dogImage} alt="Dog" />
      </DivDos>
      <DivTres>
        <H1>{dog.breed.name}</H1>
      </DivTres>
    </Div>
  );
};
