import React from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import ContactUs from "../../components/Contact Us/contact-us";
import { motion } from "framer-motion";

class Service1 extends React.Component {
  render() {
    const cardStyle = {
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
      borderRadius: "15px",
      margin: "40px 0",
      padding: "40px",
      backgroundColor: "#fff",
      border: "none",
    };

    const textStyle = {
      fontSize: "18px", // Bigger font size for main text
      lineHeight: "1.8", // More line spacing for readability
      color: "#4a4a4a", // Soft color for text, less harsh on the eyes
      textAlign: "justify", // Justify text for a polished look
    };

    const titleStyle = {
      fontWeight: "600",
      fontSize: "30px", // Larger and bolder title for emphasis
      marginBottom: "20px", // More space below the title
      color: "#FFA500", // A color that stands out
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
        <NavbarPage />
        <Section />

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
                      Core Outreach Support
                    </Card.Title>
                    <Card.Text style={textStyle}>
                      We are excellent in providing all home-bound personal and
                      self-care support as well as community access supports to
                      assist you in visiting family and friends or participating
                      in daily scheduled or innovative activities or social
                      events in the community. Your core funding section of your
                      NDIS plan enables you to get the core outreach support.
                      Supports for you will be available 24 hours a day, 7 days
                      a week. These supports are currently available in the
                      Greater Darwin regions.
                    </Card.Text>
                  </motion.div>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </Container>

        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Service1;
