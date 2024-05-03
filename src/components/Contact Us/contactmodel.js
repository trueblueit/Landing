import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { LinkBox, LinkOverlay, Heading, Text } from "@chakra-ui/react";

const ContactUs_model = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <section
        className="section"
        id="contact"
        style={{ padding: "60px 0", backgroundColor: "#f2f2f2" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="mb-4 mb-lg-0">
              <LinkBox
                p="4"
                boxShadow="md"
                textAlign="center"
                mb="4"
                height={{ base: "auto", lg: "150px" }}
                borderRadius="15px"
                className="mb-3"
                background="white"
              >
                <Heading>
                  <i
                    className="fa fa-envelope
                    icon me-3 mb-3"
                    style={{ fontSize: "38px" }}
                  ></i>
                  Message Us At
                </Heading>

                <LinkOverlay href="mailto:admin@lifeisok.info">
                  <p style={{ color: "#fb5607" }}>admin@lifeisok.info</p>
                </LinkOverlay>
              </LinkBox>
            </Col>

            <Col lg="12">
              <LinkBox
                p="4"
                boxShadow="md"
                textAlign="center"
                mb="4"
                height={{ base: "auto", lg: "150px" }}
                background="white"
                borderRadius="15px"
                className="mb-3"
              >
                <Heading>
                  <i
                    className="fa fa-map icon me-3 mb-3"
                    style={{ fontSize: "38px" }}
                  ></i>
                  Location
                </Heading>

                <LinkOverlay
                  href="https://www.google.com/maps/search/?api=1&query=48+Trower+Rd,+Millner+NT+0810"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p style={{ color: "#fb5607" }}>
                    Shop 16 (Rapid Creek Shopping Village) 48 Trower Road,
                    Milner, NT 0810
                  </p>
                </LinkOverlay>
              </LinkBox>
            </Col>
          </Row>
        </Container>
      </section>
    </Modal>
  );
};
function Hcontact() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <React.Fragment>
      <section className="section-sm " id="feedback">
        <Container>
          <Row>
            <Col>
              <div
                className="about-card p-5 shadow-sm"
                style={{
                  background: "white",
                  borderRadius: "15px",
                  textAlign: "center",
                  position: "relative",
                  top: "0",
                  transition: "top ease 0.5s",
                  backgroundColor: "#f2f2f2",
                  height: "500px",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.top = "-7px")}
                onMouseLeave={(e) => (e.currentTarget.style.top = "0")}
              >
                <div style={{ marginBottom: "40px", textAlign: "center" }}>
                  <h2 style={{ marginBottom: "20px" }}>Get In Touch</h2>
                  <p>
                    We thrive when coming up with innovative ideas but also
                    understand that a smart concept should be supported with
                    measurable results.
                  </p>
                </div>
                <a
                  onClick={() => setModalShow(true)}
                  className="btn mybtn mt-4"
                >
                  Our Info
                </a>
                <ContactUs_model
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Hcontact;
