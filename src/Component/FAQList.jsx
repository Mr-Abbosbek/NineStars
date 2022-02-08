import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DateBase from "./database/base";
import Faq from './UI/FAQ/Faq';

function FAQList() {

  return (
    <>
      <section className="faqList">
        <Container>
          <Row>
            <Col className="text-center m-0 ">
              <h3 className="all-title">F.A.Q</h3>
              <h2 className="fw-bold m-0">Frequently Asked Questions</h2>
              <div className="d-flex justify-content-center">
                <hr className="line-red" />
              </div>
            </Col>
          </Row>
          <Row className="row-all">
            <Col>
              {
                DateBase.date3.map((post) => (
                  <Faq key={post.id} {...post} />
                ))
              }
            </Col>
          </Row>
        </Container>
      </section>
      <div className="additional border-0" id="team"></div>
    </>
  );
}

export default FAQList;
