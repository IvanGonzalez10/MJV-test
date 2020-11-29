import React from "react";
import { Div, DivDos, Img, DivTres, H1, H2 } from "./styles";
import { Spinner } from "../../styles/Spinner";

export const Container = ({ dog, updateDog, loading }) => {
  if (loading) return <Spinner />;
  return (
    <Div>
      <H1>Clickea encima de la imagen para ver más fotos</H1>
      <DivDos onClick={() => updateDog(dog.breed.id)}>
        <Img src={dog.dogImage} alt="Dog" />
      </DivDos>
      <DivTres>
        <H2>{dog.breed.name}</H2>
      </DivTres>
    </Div>
  );
};
