import React, { useEffect, useState } from 'react'
import ContentHeader from '../Components/ContentHeader'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SidebarContainer from '../Components/SidebarContainer'
import { useNavigate } from "react-router-dom";
import { validUser, getUserByNick, getLocations, updateUser } from "../ApiCalls/APIInvoke";

const Perfil = () => {
  const [user, setUser] = useState({})
  const [locations, setLocations] = useState([])

  //Setting all currently available locations
  const [currentLocationsAvailable, setCurrentLocationAvailable] = useState([])

  useEffect(() => {
    getLocations(localStorage.getItem("session"), setLocations)
    getUserByNick(localStorage.getItem("session"), function (res) {
      setUser(res.data.result)
    })
  }, [])

  useEffect(() => {

  }, [user])

  //displays current location name ex."United States"
  const [currentLocationName, setCurrentLocationName] = useState("")

  useEffect(() => {
    // sets the name for a location based on its ID
    setCurrentLocationName(locations.find(e => e._id === user.location))

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
    if (!res.data.isValid) {
      navigate("/");
    }
  });

  const [passwordCheck, setPasswordCheck] = useState(true)
  const [convertToExpert, setConvertToExpert] = useState(false)

  const [currentLocationSelected, setCurrentLocationSelected] = useState(currentLocationName || "Argentina")

  //Handlers for selection a location
  function handleLocation(e) {
    setCurrentLocationSelected(e.target.value)

    //var location_id = locations.find(e => e.name === currentLocationSelected)._id

    setUsuario({
      ...usuario,
      ["location"]: locations.find(ee => ee.name === e.target.value)._id,
    });

    //var locationId = locations.find(e => e.name === currentLocationSelected)._id
  }

  const [usuario, setUsuario] = useState({});

  const onchange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };


  //Used to set a user to exper and change their location
  function isExpertChange(option) {
    if (option === true) {

      var location_id = locations.find(e => e.name === currentLocationSelected)._id
      usuario['isExpert'] = true
      usuario['location'] = location_id
    }
  }

  function onSubmit(){
    updateUser(localStorage.getItem("session"), user.nickname, usuario , function(res){
      // console.log(res)
    })
  }



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
                            {user.firstname} {user.lastname}
                          </h3>
                          <p className="text-muted text-center">
                            {user.isExpert ?
                              <>
                                Experto: @{user.nickname}
                              </> :
                              <>
                                Usuario: @{user.nickname}
                              </>}
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
                                Editar
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
                                  <h3 className="card-title">Sobre mi</h3>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                  <strong>
                                    <i className="fas fa-user mr-1" /> Nombre y Nick
                                  </strong>
                                  <p className="text-muted">
                                    {user.firstname} {user.lastname} @{user.nickname}
                                  </p>
                                  <hr />

                                  <strong>
                                    <i className="fas fa-envelope mr-1" /> Correo
                                  </strong>
                                  <p className="text-muted">
                                    {user.email}
                                  </p>
                                  <hr />

                                  {user.occupation != null ?
                                    <>
                                      <strong>
                                        <i className="far fa-file-alt mr-1" /> Ocupacion
                                      </strong>
                                      <p className="text-muted">
                                        {user.occupation}
                                      </p>
                                      <hr />
                                    </>

                                    : <></>}

                                  {user.location != null && currentLocationName != null ?
                                    <>
                                      <strong>
                                        <i className="fas fa-map-marker-alt mr-1" /> Location
                                      </strong>
                                      <p className="text-muted"> {currentLocationName.name} - {currentLocationName.code}</p>
                                    </>
                                    :
                                    <></>
                                  }

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
                                    Nombre
                                  </label>
                                  <div className="col-sm-10">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="firstname"
                                      name="firstname"
                                      defaultValue={user.firstname}
                                      placeholder="Nombre"
                                      onChange={onchange}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="inputName2"
                                    className="col-sm-2 col-form-label"
                                  >
                                    Apellido
                                  </label>
                                  <div className="col-sm-10">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="lastname"
                                      name="lastname"
                                      placeholder="Apellido"
                                      defaultValue={user.lastname}
                                      onChange={onchange}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="inputEmail"
                                    className="col-sm-2 col-form-label"

                                  >
                                    Correo
                                  </label>
                                  <div className="col-sm-10">
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email"
                                      name="email"
                                      placeholder="Correo"
                                      defaultValue={user.email}
                                      onChange={onchange}
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label
                                    htmlFor="inputEmail"
                                    className="col-sm-2 col-form-label"
                                  >
                                    Nickname
                                  </label>
                                  <div className="col-sm-10">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="nickname"
                                      name="nickname"
                                      placeholder="Nickname"
                                      defaultValue={user.nickname}
                                      onChange={onchange}

                                    />
                                  </div>
                                </div>


                                {user.isExpert ?
                                  <>

                                    <div className="form-group row">
                                      <label
                                        htmlFor="inputExperience"
                                        className="col-sm-2 col-form-label"
                                      >
                                        Ubicacion
                                      </label>
                                      <div className="col-sm-10">
                                        <select className="form-control select2 col-5" style={{ width: '100%' }} onChange={handleLocation}> {currentLocationsAvailable.map((x, y) => <option key={y}>{x}</option>)}</select>
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label
                                        htmlFor="inputSkills"
                                        className="col-sm-2 col-form-label"
                                      >
                                        Ocupacion
                                      </label>
                                      <div className="col-sm-10">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="occupation"
                                          name="occupation"
                                          placeholder="Ocupacion"
                                          defaultValue={user.occupation}
                                          onChange={onchange}
                                        />
                                      </div>
                                    </div>


                                  </>
                                  :
                                  <>
                                    {!convertToExpert ?
                                      <>
                                        <label for="Expert">
                                          <input type="checkbox" id="Expert" name="Expert" onClick={() => { setConvertToExpert(!convertToExpert); isExpertChange(true) }} style={{ marginTop: 20, marginBottom: 20 }} />  Convertirme en Experto
                                        </label>
                                      </> :
                                      <>
                                        <p>LLena los campos de abajo para convertirte en un experto</p>
                                      </>}


                                    {convertToExpert ? <>
                                      <div className="form-group row">
                                        <label
                                          htmlFor="inputExperience"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Ubicacion
                                        </label>
                                        <div className="col-sm-10">
                                          <select className="form-control select2 col-5" style={{ width: '100%' }} onChange={handleLocation}> {currentLocationsAvailable.map((x, y) => <option key={y}>{x}</option>)}</select>
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label
                                          htmlFor="inputSkills"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Ocupacion
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="occupation"
                                            name="occupation"
                                            placeholder="Ocupacion"
                                            defaultValue={user.occupation}
                                            onChange={onchange}
                                          />
                                        </div>
                                      </div>
                                    </> :
                                      <></>

                                    }

                                  </>}


                                <br></br>

                                <div className="form-group row">
                                  <div className="offset-sm-2 col-sm-10">
                                    <button

                                      // type="submit"
                                      className="btn btn-danger"
                                      onClick={()=>{onSubmit()}}
                                    >
                                      Guardar
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