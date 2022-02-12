import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

function newsLatterList() {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col className="text-center m-0">
            <h3 className="all-title">Contact Us</h3>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </Col>
        </Row>
        <form>
          <Row className="row-all m-0">
            <Col className="col-lg-7 col-md-9 col-sm-12 d-flex justify-content-between newsLatter-form">
              <MyInput className="form-control" type="email" placeholder="Your Email" />
              <MyButton id="subscribe-button" >Subscribe</MyButton>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
}

export default newsLatterList;
