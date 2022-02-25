import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataBase from "./database/base";

function Footer() {
  return (
    <>
      <section className="pt-5 pb-4 footer">
        <Container>
          <Row className="row-all justify-content-start justify-content-md-between m-0">
            <Col className="col-lg-3 col-md-5 col-sm-6 col-12 p-0">
              <h4 className="fw-bold">NineStars</h4>
              <p className="opacity-50 footer-blog1">
                A108 Adam Street New York, NY 535022 United States
              </p>
              <p>
                Phone: <span className="opacity-50">+998777777777</span>
              </p>
              <p>
                Email: <span className="opacity-50">info@example.com</span>
              </p>
            </Col>

            <Col className="col-lg-3 col-md-3 col-sm-6 col-12 m-0 px-0 pt-1">
              <h6 className="fw-bold">Useful Links</h6>
              {DataBase.useful_Links1.map((post) => (
                <div className="d-flex align-items-center mb-3" key={post.id}>
                  <p className="footer-icons-right m-0">{post.icon}</p>
                  <Link to="#" className="m-0 footer-link">
                    {post.text}
                  </Link>
                </div>
              ))}
            </Col>

            <Col className="col-lg-3 col-md-3 col-sm-6 px-0 col-12 pt-lg-1 pt-md-1 pt-sm-4 pt-4">
              <h6 className="fw-bold">Useful Links</h6>
              {DataBase.useful_Links2.map((post) => (
                <div className="d-flex align-items-center mb-3" key={post.id}>
                  <p className="footer-icons-right m-0">{post.icon}</p>
                  <Link to="#" className="m-0 footer-link">
                    {post.text}
                  </Link>
                </div>
              ))}
            </Col>

            <Col className="col-lg-3 col-md-7 col-sm-6 col-12 pt-lg-0 pt-md-0 pt-sm-3 pt-4">
              <Row>
                <Col className="p-0">
                  <h5 className="fw-bold pt-sm-1">Our Social Networks</h5>
                  <p>
                    Cras Fermentum Odio Eu Feugiat Lide Par Naso Tierra Videa
                    Magna Derita Valies
                  </p>
                </Col>
              </Row>
              <Row className="d-flex justify-content-sm-around">
                {DataBase.footer_icons.map((post, id) => (
                  <Col key={id} className="footer-fourth p-0">
                    <p className="footer-icon">{post.icon}</p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="py-2">
            <Col className="d-flex flex-wrap justify-content-between align-items-center py-4 copyright">
              <h6>
                &copy; Copyright{" "}
                <span className="text-dark mx-1">Ninestars.</span> All Rights
                Reserved
              </h6>
              <h6>
                Designed By{" "}
                <Link to="#" className="footer-link mx-1 footer-react">
                  {" "}
                  React Js
                </Link>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
