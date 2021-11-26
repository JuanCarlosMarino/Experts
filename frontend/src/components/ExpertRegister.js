import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'

const ExpertRegister = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Sign up</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDropdown">
                    <Form.Label>Location</Form.Label>
                    <Form.Select>
                        <option>Select a location</option>
                        <option>New York</option>
                        <option>Bogotá</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCelphone">
                    <Form.Label>Cell phone</Form.Label>
                    <Form.Control type="Tel" placeholder="Enter your cell phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDNI">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="Text" placeholder="Enter your DNI" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBio">
                    <Form.Label>Biography</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your biography" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContactLink">
                    <Form.Label>Contact Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter your contact link" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContactLink">
                    <Form.Label>Contact Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter your contact link" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicOccupation">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="text" placeholder="Enter your occupation" />
                </Form.Group>

                <Container fluid="md">
                    <Row>
                        <Button variant="dark" type="submit">
                            Submit
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
