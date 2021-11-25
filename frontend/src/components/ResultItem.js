import React from "react";
import { Stack, Image } from "react-bootstrap";
import { GeoAlt, Briefcase } from "react-bootstrap-icons";

const ResultItem = (props) => {
  return (
    <Stack gap={4} direction="horizontal">
      <Image
        src="https://cdns-images.dzcdn.net/images/artist/ef6244c655e8cbe91eeb56bb6f934176/500x500.jpg"
        roundedCircle
        width="60px"
        height="60px"
      />
      <div>
        <h5>Jorge Luis Hernandez</h5>

        <Stack gap={2} direction="horizontal">
          <GeoAlt />
          <div>Paris</div>
        </Stack>

        <Stack gap={2} direction="horizontal">
          <Briefcase />
          <div>Clases de programación</div>
        </Stack>
      </div>
    </Stack>
  );
};

export default ResultItem;
