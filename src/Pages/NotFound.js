import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  
  return (
    <>
        <h1>Not found</h1>
        <Link to={"/principal"}>
            Volver!
          </Link>
    </>
  );
}

export default NotFound;
