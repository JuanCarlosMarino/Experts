import React from "react";
import { Navigate } from "react-router";
import ExpertRegister from "../components/ExpertRegister";

const Register = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  } //else if (user.flagNewUser == false) {
  //return <Navigate to="/home" />;
  //}

  return <ExpertRegister />;
};

export default Register;
