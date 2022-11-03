import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUser} from "../../ApiCalls/APIInvoke";

const CrearCuenta = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    firstname: "",
    lastname: "",
    nickname: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { firstname, lastname, nickname, email, password, confirmar } = usuario;
  const onchange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("firstname").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (usuario.password === usuario.confirmar) {
      createUser(usuario, function (response) {
        if (response.data.isAccept) {
          navigate("/");
        } else {
          alert("Hubo un error revisa tus datos ingresados!");
        }
      });
    } else {
      alert("Hubo un error revisa tus datos ingresados!");
    }
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"/"}>
            <b>Crear </b>cuenta
          </Link>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingrese los datos del usuario</p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={onchange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={onchange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nickname"
                  id="nickname"
                  name="nickname"
                  value={nickname}
                  onChange={onchange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onchange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onchange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmar contraseña"
                  id="confirmar"
                  name="confirmar"
                  value={confirmar}
                  onChange={onchange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Crear cuenta
                </button>
                <Link to={"/"} className="btn btn-block btn-danger">
                  Regresar al Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
