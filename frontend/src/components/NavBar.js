import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Button1 from "./Button";

const NavBar = (props) => {
  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <h1 style={styles}>Holis {props.nombre}</h1>
      <Button variant="primary">Primary</Button>
      <Button1/>
    </div>


  )
}
const styles = {
  color: 'red',
}
export default NavBar

