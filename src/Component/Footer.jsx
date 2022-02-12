import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataBase from "./database/base";

function Footer() {
  return (
    <section className="py-5" style={{background: "white"}}>
      <Container>
        <Row className="row-all justify-content-start m-0">
          <Col className="col-lg-3 col-md-4 col-sm-6 col-12">
            <h4>NineStars</h4>
            <p className="opacity-50">A108 Adam Street New York, NY 535022 United States</p>
            <p>
              Phone: <span className="opacity-50">+998777777777</span>
            </p>
            <p>
              Email: <span className="opacity-50">info@example.com</span>
            </p>
          </Col>

          <Col className="col-lg-3 col-md-4 col-sm-6 col-12">
            <h5> Useful Links</h5>
            {DataBase.useful_Links1.map((post) => (
              <div className="d-flex mb-3 footer-link" key={post.id}>
                <p className="footer-icons-right m-0">{post.icon}</p>
                <Link to="#" className="m-0 footer-link">{post.text}</Link>
              </div>
            ))}
          </Col>

          <Col className="col-lg-3 col-md-4 col-sm-6 col-12">
            <h5> Useful Links</h5>
            {DataBase.useful_Links2.map((post) => (
              <div className="d-flex mb-3" key={post.id}>
                <p className="footer-icons-right m-0">{post.icon}</p>
                <Link to="#" className="m-0 footer-link">{post.text}</Link>
              </div>
            ))}
          </Col>

          <Col className="col-lg-3 col-md-7 col-sm-6 col-12">
            <Row>
              <Col className="p-0">
                <h5>Our Social Networks</h5>
                <p>
                  Cras Fermentum Odio Eu Feugiat Lide Par Naso Tierra Videa
                  Magna Derita Valies
                </p>
              </Col>
            </Row>
            <Row className="d-flex">
              {DataBase.footer_icons.map((post, id) => (
                <Col key={id} className="footer-fourth p-0">
                  <p className="footer-icon m-0">{post.icon}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
