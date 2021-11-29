import React from "react";
import { Navigate } from "react-router-dom";

import UserHome from "../components/UserHome";
import ExpertHome from "../components/ExpertHome";

const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <UserHome />
    </div>
  );
};

export default Home;
