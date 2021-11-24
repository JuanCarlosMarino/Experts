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
          src="https://raw.githubusercontent.com/JuanCarlosMarino/Experts/frontend/frontend/src/assets/img/people-background.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/JuanCarlosMarino/Experts/frontend/frontend/src/assets/img/people-background2.jpg"
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
