import React from "react";
import { Stack, Image } from "react-bootstrap";
import { GeoAlt, Briefcase, Whatsapp } from "react-bootstrap-icons";

const Profile = (props) => {
  const { expertData } = props;

  const goToWhatsApp = (contactLink) => {
    window.open(contactLink);
  };
  return (
    <Stack gap={2} className="align-items-center">
      <Image
        src={expertData.photoUrl}
        roundedCircle
        width="80px"
        height="80px"
      />
      <h4>{expertData.name}</h4>
      <div className="justify-content-center">
        <Stack gap={2} direction="horizontal">
          <GeoAlt />
          <div>{expertData.location}</div>
        </Stack>
        <Stack gap={2} direction="horizontal">
          <Briefcase />
          <div>{expertData.occupation}</div>
        </Stack>
        <p>{expertData.bio}</p>
      </div>

      <Whatsapp
        size={50}
        color="green"
        onClick={() => goToWhatsApp(expertData.contactLink)}
      />
    </Stack>
  );
};

export default Profile;
