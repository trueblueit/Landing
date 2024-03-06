import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Lottie from "lottie-react";
import animationdata from "../../animation/Animation - 1708004346894.json";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-home home-half" id="home">
          <div className="bg-overlay"></div>
          <Container fluid>
            <Container>
              <Row>
                <p className="animationbox">
                  <Lottie animationData={animationdata}></Lottie>
                </p>
                /*
                <p className="animationbox1">
                  <motion.img
                    src="assets/lifeisok/Photo-1.jpg"
                    width="350"
                    height="auto"
                    class="rounded-circle"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -30, 0] }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </p>
                */
                <Col
                  lg={{ size: 8, offset: 2 }}
                  className="text-white text-center"
                >
                  <motion.h1
                    className="home-title"
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                  >
                    Providing best Support for Your Choice
                  </motion.h1>
                  <motion.p
                    className="home-desc"
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3 }}
                  >
                    Dedicated to improving the quality of life for people with
                    disabilites. Aims to build a partnership with NDIS
                    Participants to learn what they want to learn and achieve.
                  </motion.p>
                </Col>
              </Row>
            </Container>

            <div className="wave-effect wave-anim">
              <div className="waves-shape shape-one">
                <div
                  className="wave wave-one"
                  style={{
                    backgroundImage: `url(assets/images/wave-shape/wave1.png)`,
                  }}
                ></div>
              </div>
              <div className="waves-shape shape-two">
                <div
                  className="wave wave-two"
                  style={{
                    backgroundImage: `url(assets/images/wave-shape/wave2.png)`,
                  }}
                ></div>
              </div>
              <div className="waves-shape shape-three">
                <div
                  className="wave wave-three"
                  style={{
                    backgroundImage: `url(assets/images/wave-shape/wave3.png)`,
                  }}
                ></div>
              </div>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
