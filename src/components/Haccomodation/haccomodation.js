import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Accommodations = () => {
  return (
    <section
      className="section-sm "
      id="accomodation"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <Container className="justify-content-center">
        <Row>
          <Col md={6}>
            <h2
              className="section-heading"
              style={{
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Our Accomodation
            </h2>
            <p className="text-center" style={{ marginBottom: "40px" }}>
              Available for Independent Living, Short & Medium-Term Accomodation
            </p>
          </Col>
          <Col style={{ position: "relative" }}>
            <img
              alt="House demo"
              style={{ height: "50vh" }}
              src="assets/lifeisok/house/1.jpg"
            />
            <button
              className="btn mybtn"
              style={{
                position: "absolute",
                top: "80%",
                left: "50%",
              }}
              onClick={() => (window.location.href = "/ACCOMMODATIONSUPPORT")}
            >
              View Details
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Accommodations;
