import React, { useEffect, useState } from "react";
import ContentHeader from "../Components/ContentHeader";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import SidebarContainer from "../Components/SidebarContainer";
import { useAsyncError, useNavigate } from "react-router-dom";
import { validUser, getLocations, getExpertsByLocation } from "../ApiCalls/APIInvoke";


const Home = (props) => {
  const [locations, setLocations] = useState([])

  //Setting all currently available locations
  const [currentLocationsAvailable, setCurrentLocationAvailable] = useState([])

  //setting all experts in a location
  const [existingExperts, setExistingExperts] = useState([])

  //variable to search for experts given a certain location
  const expertsInLocation = (location) => {
    //llamdo al backend
    getExpertsByLocation(localStorage.getItem("session"), location, setExistingExperts)
    // console.log(existingExperts)

  }

  //Gets all locations registered in the backend
  useEffect(() => {
    getLocations(localStorage.getItem("session"), setLocations)

  }, [])

  //Parses the locations bu elements into an array
  useEffect(() => {
    //Metodo para obtener todo los paises registrados
    var currentLocations = [];
    for (let i = 0; i < locations.length; i++) {
      const element = locations[i].name;
      if (!currentLocations.includes(element)) {
        currentLocations.push(element)
      }
      setCurrentLocationAvailable(currentLocations)
    }
  }, [locations])

  const [currentLocationSelected, setCurrentLocationSelected] = useState("Argentina")

  //Handlers for selection a location
  function handleLocation(e) {
    setCurrentLocationSelected(e.target.value)
    //var locationId = locations.find(e => e.name === currentLocationSelected)._id
  }


  const navigate = useNavigate();
  validUser(localStorage.getItem("session"), function (res) {
    // console.log(res.data)
    if (!res.data.isValid) {
      navigate("/");
    }
  });

  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper ">
        <ContentHeader title="Home"></ContentHeader>

        <section className="content" style={{ width: 'auto' }}>
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Busca a un experto</h3>
              </div>

              <section classname="content">
                <div classname="container-fluid">
                  <div classname="row">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Elije una ubicacion</label>
                            <select className="form-control select2 col-5" style={{ width: '100%' }} onChange={handleLocation}> {currentLocationsAvailable.map((x, y) => <option key={y}>{x}</option>)}</select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="card-footer">
                <button type="submit" class="btn btn-primary" onClick={() => (expertsInLocation(locations.find(e => e.name === currentLocationSelected)._id))}>Buscar</button>
              </div>
            </div>
            {existingExperts.length < 1 ?
              <>
                <div class="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Expertos Disponibles</h3>
                        <div className="card-tools">

                        </div>
                      </div>
                      <h4 style={{ textAlign: "center", marginTop: 25, marginBottom: 25 }}>No hay Experto en esta ubicacion, intenta buscar por otra ubicacion</h4>
                    </div>
                  </div>
                </div>



              </>
              :
              <>
                <div class="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Expertos Disponibles</h3>
                        <div className="card-tools">

                        </div>
                      </div>
                      {/* /.card-header */}

                      <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                          <thead>
                            <tr>
                              <th>Nombre</th>
                              <th>Nick</th>
                              <th>Email</th>
                              <th>Ocupacion</th>
                            </tr>
                          </thead>
                          <tbody>
                            {existingExperts.map((x, y) =>
                              <tr key={y}>
                                <td>{x.firstname} {x.lastname} </td>
                                <td>@{x.nickname}</td>
                                <td>{x.email}</td>
                                <td>{x.occupation} </td>
                              </tr>
                            )}

                          </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                </div>

              </>}

          </div>


        </section>


      </div >

      <Footer></Footer>
    </div >
  );
};

export default Home;
