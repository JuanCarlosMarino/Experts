import React, { useEffect, useState } from "react";
import ContentHeader from "../Components/ContentHeader";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import SidebarContainer from "../Components/SidebarContainer";
import { useNavigate } from "react-router-dom";
import { validUser, getLocations } from "../ApiCalls/APIInvoke";


const Home = (props) => {
  const [locations, setLocations] = useState([])

  //Setting all currently available locations
  const [currentLocationsAvailable, setCurrentLocationAvailable] = useState([])

  //setting all experts in a location
  const [existingExperts, setExistingExperts] = useState([])

  //variable to search for experts given a certain location
  const expertsInLocation = () => {
    //llamdo al backend

    
  }


  useEffect(() => {
    getLocations(setLocations)
  
  }, [])

  useEffect(() => {
    
    console.log(locations)

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
                            <select className="form-control select2 col-5" style={{ width: '100%' }}> {currentLocationsAvailable.map((x, y) => <option key={y}>{x}</option>)}</select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
            {existingExperts != null ?
              <>
                <div class="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Expertos Disponibles</h3>
                        <div className="card-tools">
                        
                        </div>
                      </div>
                      <h4 style={{textAlign:"center", marginTop:25, marginBottom:25}}>No hay Experto en esta ubicacion, intenta buscar por otra ubicacion</h4>
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
                              <th>ID</th>
                              <th>User</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Reason</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>183</td>
                              <td>John Doe</td>
                              <td>11-7-2014</td>
                              <td><span className="tag tag-success">Approved</span></td>
                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                            </tr>
                            <tr>
                              <td>219</td>
                              <td>Alexander Pierce</td>
                              <td>11-7-2014</td>
                              <td><span className="tag tag-warning">Pending</span></td>
                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                            </tr>
                            <tr>
                              <td>657</td>
                              <td>Bob Doe</td>
                              <td>11-7-2014</td>
                              <td><span className="tag tag-primary">Approved</span></td>
                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                            </tr>
                            <tr>
                              <td>175</td>
                              <td>Mike Doe</td>
                              <td>11-7-2014</td>
                              <td><span className="tag tag-danger">Denied</span></td>
                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                            </tr>
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
