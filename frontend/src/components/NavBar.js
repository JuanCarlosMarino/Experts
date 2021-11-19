import React from "react";

const NavBar = (props) => {
    return(
        <div>
            <h2>Holaaaa!! {props.nombre} </h2>
            <h3>Apellido: {props.apellido}</h3>
        </div>
    )
}

export default NavBar;
