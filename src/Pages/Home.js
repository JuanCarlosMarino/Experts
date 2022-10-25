import React from "react";
import ContentHeader from "../Components/ContentHeader";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import SidebarContainer from "../Components/SidebarContainer";

const Home = () => {
  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader></ContentHeader>
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
