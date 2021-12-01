import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'

import { addExpert } from '../apis/crud'

const ExpertRegister = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    
    function save(even) {     
        even.preventDefault();   
        const obj = {
            name: even.target[0].value,
            location: even.target[1].value,
            cel: even.target[2].value,
            DNI: even.target[3].value,
            bio: even.target[4].value,
            contactLink: even.target[5].value,
            occupation: even.target[6].value,
            photoUrl: user.photoUrl,
            id: user.uid,
        }
        addExpert(obj, (res)=>{
            console.log(res);
            if(res == "Success"){
               user.flagNewUser = false;
               localStorage.setItem("user", JSON.stringify(user));
               window.location.href="/home";
            }else{
                alert("Algo salió mal, vuelve a intentarlo")
            }            
        })                
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Sign up</h1>
            </div>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Select>
                        <option>Select a location</option>
                        <option value="Paris">Paris</option>
                        <option value="Londres">Londres</option>
                        <option value="Berlin">Berlin</option>
                        <option value="New York">New York</option>
                        <option value="Tokio">Tokio</option>
                        <option value="Cartagena">Cartagena</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="cel">
                    <Form.Label>Cell phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your cell phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="DNI">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" placeholder="Enter your DNI" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bio">
                    <Form.Label>Biography</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your biography" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactLink">
                    <Form.Label>Contact Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter your contact link" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="occupation">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="text" placeholder="Enter your occupation" />
                </Form.Group>

                <Container fluid="md">
                    <Row>
                        <Button variant="dark" type="submit">
                            Registrarse
                        </Button>
                    </Row>
                </Container>

                <br />
                <br />
            </Form>
        </>
    )
}

export default ExpertRegister
