import React from "react";
import { Stack, Image } from "react-bootstrap";
import { GeoAlt, Briefcase, Whatsapp } from "react-bootstrap-icons";

const Profile = () => {
  return (
    <Stack gap={2} className="align-items-center">
      <Image
        src="https://cdns-images.dzcdn.net/images/artist/ef6244c655e8cbe91eeb56bb6f934176/500x500.jpg"
        roundedCircle
        width="80px"
        height="80px"
      />
      <h4>Jorge Luis Hernandez</h4>
      <div className="justify-content-center">
        <Stack gap={2} direction="horizontal">
          <GeoAlt />
          <div>Paris</div>
        </Stack>
        <Stack gap={2} direction="horizontal">
          <Briefcase />
          <div>Clases de programación</div>
        </Stack>
        <p>
          Hola! Me encanta la tecnología y tengo bastante experiencia enseñando
          programación.
        </p>
      </div>

      <Whatsapp size={50} color="green" />
    </Stack>
  );
};

export default Profile;
