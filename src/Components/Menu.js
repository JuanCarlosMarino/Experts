import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Menu = () => {
  const navigate = useNavigate();
  const logOut = () =>{
    localStorage.removeItem("session");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >

        <li className="nav-item">
          <Link to="/home" className="nav-link">
            <i className="nav-icon fas fa-home" />
            <p>
              Home
            </p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/perfil" className="nav-link">
            <i className="nav-icon fas fa-user" />
            <p>
              Perfil
            </p>
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={() =>{ logOut()}} to="/home" className="nav-link btn-danger" style={{ color: "white" }}>
            <i className="nav-icon fas fa-times-circle" />
            <p >
              Cerrar sesión
            </p>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Menu;
