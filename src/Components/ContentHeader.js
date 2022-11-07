import React from 'react'
import { Link } from 'react-router-dom'

const ContentHeader = (props) => {
  return (
    <section className="content-header">
  <div className="container-fluid">
    <div className="row mb-2">
      <div className="col-sm-6">
        <h1>{props.title}</h1>
      </div>
      {/* <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><Link to={"#"}>Home</Link></li>
          <li className="breadcrumb-item active">Blank Page</li>
        </ol>
      </div> */}
    </div>
  </div>{/* /.container-fluid */}
</section>

  )
}

export default ContentHeader