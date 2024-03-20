import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";

export function DemoModal(props) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    qualification: "",
    position: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://154.41.240.103/main.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // Response from PHP script
      // Optionally, show a success message or handle further actions
    } catch (error) {
      console.error("Error:", error);
      // Optionally, show an error message or handle error cases
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="m-3 m-lg-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            <h1 style={{ color: "#ff6900" }} className="mb-3">
              Register your Intrest
            </h1>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="f-name" label="First Name">
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="l-name" label="Last Name">
                <Form.Control type="text" placeholder="Last Name" />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="qual" label="Qualifications">
                <Form.Control type="text" placeholder="Qualifications" />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <Form.Select aria-label="Position">
                <option>Select the position</option>
                <option value="1">Support Worker</option>
                <option value="2">Support Coordinator</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type Here" />
          </Form.Group>

          <Button
            className="mx-auto"
            style={{ background: "#ff6900" }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

export function Career() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <React.Fragment>
      <section className="section mybg" id="Career">
        <div className="bg-overlay"></div>
        <Container fluid>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="text-white">Join Our Team Today</h2>
              <p className="pt-3 home-desc mx-auto">
                Founded by a team of professionals to improve the quality of
                life for people with difficulties.
              </p>
              <Button
                className="mt-3 mt-lg-5"
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                Join Us
              </Button>

              <DemoModal show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
