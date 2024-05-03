import React, { Component } from "react";

import NavbarPage from "../../components/Navbar/Navbarpage2";
import Section from "./section";
import Values from "../../components/Values/values";
import Services from "../../components/Services/services";
import { Career } from "../../components/career/career";
import Accomodation from "../../components/Haccomodation/haccomodation";
import Feedback from "../../components/Feedback/feedback";
import Hcontact from "../../components/Contact Us/contactmodel";
import Footer from "../../components/Footer/footer";

import { Row, Col } from "react-bootstrap";

class Index2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "",
    };
  }
  componentDidMount() {
    document.getElementById("colorTheme").href = "assets/colors/orange.css";
  }

  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <Section />
        <Values />
        <Services />
        <Accomodation />
        <Row>
          <Col lg={4} md={6}>
            <Career />
          </Col>
          <Col lg={4} md={6}>
            <Feedback />
          </Col>
          <Col lg={4} md={12}>
            <Hcontact />
          </Col>
        </Row>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Index2;
