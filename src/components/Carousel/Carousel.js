import React from "react";
import { Carousel } from "antd";
import { Div, DivCont, P, Img } from "./styles";

export const Carrusel = () => {
  return (
    <Carousel autoplay>
      <Div>
        <Img
          src="https://t2.ea.ltmcdn.com/es/razas/5/5/0/img_55_golden-retriever-o-cobrador-dorado_0_600.jpg"
          alt="Perro"
        />
      </Div>
    </Carousel>
  );
};
