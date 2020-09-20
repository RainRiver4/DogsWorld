import React, { useState } from "react";
import { Col, Form, Button, Modal, Alert } from "react-bootstrap";

const Contact = () => {
    const [state, setState] = useState({ txt: "", variant: "" });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSubmit = e => {
        e.preventDefault();
        setShow(true);
        const value = e.target.elements[0].value;
        if (value === "") {
            setState({
                txt: "Wiadomość jest pusta proszę wypełnić aby wysłać !!!",
                variant: "danger",
            });
        } else if (value.length < 3) {
            setState({
                txt: "Podana wiadomość jest za krótka !!!",
                variant: "danger",
            });
        } else {
            setState({
                txt: "Wiadmość została pomyślnie wysłana.",
                variant: "success",
            });
        }
    };

    return (
        <>
            <Col md>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write to us</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="6"
                            placeholder="Please enter your message..."
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="lg">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Information</Modal.Title>
                </Modal.Header>
                <Alert variant={state.variant}>
                    <Modal.Body>{state.txt}</Modal.Body>
                </Alert>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Contact;
