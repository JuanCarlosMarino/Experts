import React from "react";
import { Navigate } from "react-router-dom";

import LandingImages from "../components/LandingImages";

const Landing = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user != undefined) {
    return <Navigate to="/home" />;
  }
  return <LandingImages />;
};

export default Landing;
