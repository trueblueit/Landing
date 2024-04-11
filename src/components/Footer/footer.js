import { Component } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "reactstrap";

class Footer extends Component {
  state = {
    socials: [
      { icon: "facebook", link: "https://www.facebook.com/lifeisok.au/" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/life-is-ok/",
      },
      { icon: "instagram", link: "#" },
    ],
  };

  render() {
    return (
      <>
        <footer className="footer footerbg">
          <div className="ft-overlay"></div>
          <Container fluid>
            <Row className="mb-4 justify-content-center">
              <Col xs={12} md={4} lg={4}>
                <img
                  className="img-fluid"
                  src="assets/lifeisok/NDIS.png"
                  alt="NDIS Logo"
                  style={{ alignContent: "top" }}
                />
              </Col>

              <Col
                xs={12}
                md={4}
                lg={4}
                className="text-white text-center mt-4 mt-md-0"
              >
                <h3>Life is Ok</h3>
                <p>
                  Founded by a team of professionals to improve the quality of
                  life for people with difficulties.
                </p>
              </Col>

              <Col xs={12} md={4} lg={4} className="text-center mt-4 mt-md-0">
                <h3 className="text-white">Follow Us</h3>
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {this.state.socials.map((social, index) => (
                    <a key={index} href={social.link}>
                      <img
                        className={"mx-3"}
                        src={`assets/lifeisok/${social.icon}.png`}
                        alt={`Social Icon ${index}`}
                      />
                    </a>
                  ))}
                </div>
              </Col>
            </Row>
            <Row>
              <p className="text-white text-center">
                We acknowledge and pay our respects to the traditional
                custodians of this land, their deep cultural heritage, and their
                vital role in shaping our community and country.
              </p>
            </Row>
          </Container>
        </footer>
        <Container fluid>
          <Row className="footer bg-dark text-white">
            <Col xs={12} md={6} className="text-white">
              <p>
                &copy; 2024 Life is OK All rights reserved ABN: 32 653 007 713
              </p>
            </Col>
            <Col xs={12} md={6} className="mt-2 text-end">
              <p>Developed by TRUE BLUE IT SERVICES.</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Footer;
