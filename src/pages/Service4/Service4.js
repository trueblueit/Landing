import React from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import ContactUs from "../../components/Contact Us/contact-us";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class Service4 extends React.Component {
  render() {
    const cardStyle = {
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
      borderRadius: "15px",
      margin: "40px 0",
      padding: "40px",
      border: " solid",
      borderColor: "#efa27d",
      background: "#f2f2f2",
      borderRadius: "15px",
    };

    const textStyle = {
      fontSize: "18px !important", // Bigger font size for main text
      lineHeight: "1.8", // More line spacing for readability
      textAlign: "left", // Justify text for a polished look
    };

    const titleStyle = {
      fontWeight: "600",
      fontSize: "30px", // Larger and bolder title for emphasis
      marginBottom: "20px", // More space below the title
    };

    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3,
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { x: -20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 120,
        },
      },
    };

    return (
      <React.Fragment>
        <Container style={{ marginTop: "60px", marginBottom: "60px" }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row className="justify-content-center">
              <Col lg={10} xl={8}>
                <Card style={cardStyle}>
                  <motion.div variants={itemVariants}>
                    <Card.Title style={titleStyle}>
                      Supports In Employment
                    </Card.Title>
                    <Card.Text style={textStyle}>
                      As a registered NDIS provider of Supports in employment
                      supports, we provide the following:
                      <br />
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </span>{" "}
                        Supports to assist participants with employment where it
                        is beyond the requirements of employment services and
                        employers.
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </span>{" "}
                        Supports the participants would require regardless of
                        the activity they are undertaking (Personal care, assist
                        with transport, assistive technology etc.)
                      </p>
                      <br />
                      We also provide services for building relationships with
                      mainstream providers and the local community to improve
                      our understanding of the employment needs of people with
                      disabilities. Funding for support in employment is in the
                      Core budget of a participant’s plan under the support
                      category Assistance with Social Economic and Community
                      Participation. The NDIS also funds capacity building
                      employment supports, such as:
                      <br />
                      <br />
                      <p>
                        <FontAwesomeIcon icon={faArrowRight} />{" "}
                        Employment-related assessment and counselling
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faArrowRight} /> Workplace
                        assistance
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faArrowRight} /> School leaver
                        employment supports (SLES)
                      </p>
                    </Card.Text>
                    <br />
                    <Link to="/index1" className="btn mybtn">
                      Enquire Now
                    </Link>
                  </motion.div>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Service4;
