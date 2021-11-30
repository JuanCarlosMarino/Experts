import React from "react";
import { Carousel } from "react-bootstrap";
import SignInButton from "./SignInButton";

const LandingImages = () => {
  const carCaption = (
    <>
      <h1>Experts</h1>
      <h3>Conocimiento especializado a tu alcance</h3>
      <SignInButton />
    </>
  );

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.idea.org.ar/wp-content/uploads/2018/04/Finanzas-Econom%C3%ADa-y-Negocios-1024x428.jpeg"
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ansareo.com/wp-content/uploads/2021/02/obra-1024x428.jpg"
          alt="Second slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingImages;
