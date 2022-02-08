import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataBase from "./database/base";

function ServicesList() {
  return (
    <>
      <section className="servicesList">
        <Container>
          <Row>
            <Col className="text-center m-0 pb-xl-4 pb-lg-4 pb-md-0 pb-sm-4 pb-4">
              <h3 className="all-title">Services</h3>
              <h2 className="fw-bold m-0">
                Check out the great services we offer
              </h2>
              <div className="d-flex justify-content-center">
                <hr className="line-red" />
              </div>
            </Col>
          </Row>
          <div className="row-all services-blogs m-0">
            {DataBase.date1.map((post, id) => (
                <div className="text-center px-4 services-blog shadow" key={id}>
                  <div className="blog-icon py-3">{post.icon}</div>
                  <h6 className="blog-title pb-1">{post.title}</h6>
                  <p className="m-0 blog-text">{post.text}</p>
                </div>
            ))}
          </div>
        </Container>
      </section>
      <div className="additional border-0" id="portfolio"></div>
    </>
  );
}

export default ServicesList;
