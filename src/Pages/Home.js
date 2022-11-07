import React from "react";
import ContentHeader from "../Components/ContentHeader";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import SidebarContainer from "../Components/SidebarContainer";
import { useNavigate } from "react-router-dom";
import { validUser } from "../ApiCalls/APIInvoke";

const Home = (props) => {
  const navigate = useNavigate();
  validUser(localStorage.getItem("session"), function (res) {
    console.log(res.data)
    if (!res.data.isValid) {
      navigate("/");
    }
  });

  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader title="Home"></ContentHeader>
        <section className="content">
          <div className="container-fluid">
            <div className="row"></div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
