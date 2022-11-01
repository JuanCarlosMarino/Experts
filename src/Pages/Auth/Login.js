import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/APIInvoke";

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nickname: "",
    password: "",
  });

  const { nickname, password } = usuario;
  const onchange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("nickname").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    login(usuario, function (response) {
      if (response.data.access) {
        localStorage.setItem("session", response.data.token);
        navigate("/home");
      } else {
        alert("Hubo un error revisa tus datos ingresados!");
      }
    });
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"/"}>
            <b>Iniciar </b>Sesión
          </Link>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              Bienvenido, ingrese sus credenciales
            </p>
            <form onSubmit={onSubmit}>
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
              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
                <Link to={"/singup"} className="btn btn-block btn-danger">
                  Crear cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
