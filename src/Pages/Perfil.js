import React from 'react'
import ContentHeader from '../Components/ContentHeader'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SidebarContainer from '../Components/SidebarContainer'
import { useNavigate } from "react-router-dom";
import { validUser } from "../ApiCalls/APIInvoke";

const Perfil = () => {

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
        <ContentHeader title="Perfil"></ContentHeader>
        <section className="content">
          <div className="container-fluid">
            <div className="row">

              {/* Main content */}
              <section className="content" style={{ width: "100%" }}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      {/* Profile Image */}
                      <div className="card card-primary card-outline">
                        <div className="card-body box-profile">
                          <div className="text-center">
                            <img

                              src="../../dist/img/user2-160x160.jpg"
                              className="img-circle elevation-2"
                              alt="User Image"
                            />
                          </div>
                          <h3 className="profile-username text-center" style={{ marginTop: 20 }}>
                            Nina Mcintire
                          </h3>
                          <p className="text-muted text-center">
                            Software Engineer
                          </p>

                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}

                      {/* /.card */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-9">
                      <div className="card">
                        <div className="card-header p-2">
                          <ul className="nav nav-pills">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                href="#details"
                                data-toggle="tab"
                              >
                                Detalles
                              </a>
                            </li>

                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#ally"
                                data-toggle="tab"
                              >
                                Aliado
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                          <div className="tab-content">
                            <div className="active tab-pane" id="details">
                              {/* Post */}
                              {/* About Me Box */}
                              <div className="card card-primary">
                                <div className="card-header">
                                  <h3 className="card-title">About Me</h3>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                  <strong>
                                    <i className="fas fa-book mr-1" /> Education
                                  </strong>
                                  <p className="text-muted">
                                    B.S. in Computer Science from the University of
                                    Tennessee at Knoxville
                                  </p>
                                  <hr />
                                  <strong>
                                    <i className="fas fa-map-marker-alt mr-1" /> Location
                                  </strong>
                                  <p className="text-muted">Malibu, California</p>
                                  <hr />
                                  <strong>
                                    <i className="fas fa-pencil-alt mr-1" /> Skills
                                  </strong>
                                  <p className="text-muted">
                                    <span className="tag tag-danger">UI Design</span>
                                    <span className="tag tag-success">Coding</span>
                                    <span className="tag tag-info">Javascript</span>
                                    <span className="tag tag-warning">PHP</span>
                                    <span className="tag tag-primary">Node.js</span>
                                  </p>
                                  <hr />
                                  <strong>
                                    <i className="far fa-file-alt mr-1" /> Notes
                                  </strong>
                                  <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam fermentum enim neque.
                                  </p>
                                </div>
                                {/* /.card-body */}
                              </div>

                            </div>
                            {/* /.tab-pane */}

                            {/* /.tab-pane */}
                            <div className="tab-pane" id="ally">
                              <form className="form-horizontal">
                                <div className="form-group row">
                                  <label
                                    htmlFor="inputName"
                                    className="col-sm-2 col-form-label"
                                  >
                                    Name
                                  </label>
                                  <div className="col-sm-10">
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="inputName"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="inputEmail"
                                    className="col-sm-2 col-form-label"
                                  >
                                    Email
                                  </label>
                                  <div className="col-sm-10">
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="inputEmail"
                                      placeholder="Email"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="inputName2"
                                    className="col-sm-2 col-form-label"
                                  >
                                    Name
                                  </label>
                                  <div className="col-sm-10">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputName2"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="inputExperience"
                                    className="col-sm-2 col-form-label"
                                  >
                                    Experience
                                  </label>
                                  <div className="col-sm-10">
                                    <textarea
                                      className="form-control"
                                      id="inputExperience"
                                      placeholder="Experience"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="inputSkills"
                                    className="col-sm-2 col-form-label"
                                  >
                                    Skills
                                  </label>
                                  <div className="col-sm-10">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputSkills"
                                      placeholder="Skills"
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <div className="offset-sm-2 col-sm-10">
                                    <button
                                      type="submit"
                                      className="btn btn-danger"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            {/* /.tab-pane */}
                          </div>
                          {/* /.tab-content */}
                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.container-fluid */}
              </section>
              {/* /.content */}





            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Perfil