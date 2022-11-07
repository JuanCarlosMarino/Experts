import React from 'react'
import Menu from './Menu'
import Logo from '../../node_modules/admin-lte/dist/img/AdminLTELogo.png';
import { Link } from 'react-router-dom';

const SidebarContainer = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/home" className="brand-link">
        <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">Admin Proyectos</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="../../dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          {/* <div className="info">
            &nbsp;
          </div>
          <div className="info">
            &nbsp;
          </div> */}
          {/* <div className="info">
        <Link to={"/home"} className="d-block">Menu Principal</Link>
      </div> */}
          <div className="info">
            <Link to="/perfil" className="d-block">
              Alexander Pierce
            </Link>
          </div>
        </div>

        {/* SidebarSearch Form */}

        <Menu></Menu>
      </div>
      {/* /.sidebar */}
    </aside>

  )
}

export default SidebarContainer