import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import MyButton from "./UI/Button/MyButton.js";

function HomeList() {
  return (
    <>
      <div className="additional" id="home"></div>
      <section className="homeList">
        <Container className="all-container">
          <Row className="row-all">
            <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 home-col order-lg-first order-md-last order-sm-last order-last">
              <div>
                <h1>Better digital experience with NineStars</h1>
                <p>
                  We are team of talented designers making websites with
                  Bootstrap
                </p>
                <Nav.Link href="#about" className="p-0"><MyButton id="btn-home">Get Started</MyButton></Nav.Link>
              </div>
            </Col>
            <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 home-col2 order-md-first">
              <Image src="./images/hero-img.svg" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <div className="additional" id="about"></div>
    </>
  );
}

export default HomeList;
