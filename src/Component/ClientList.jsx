import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function ClientList() {
  return (
    <>
      <section className="clientList">
        <Container>
          <Row>
            <Col className="text-center m-0">
              <h3 className="all-title">Clients</h3>
              <h2 className="fw-bold m-0">They trusted us</h2>
              <div className="d-flex justify-content-center pb-4">
                <hr className="line-red" />
              </div>
            </Col>
          </Row>
          <Row className="carousel row-all">
            <Col>
              <Image src="./images/clients/client-1.png" className="img-fluid" />
            </Col>
            <Col>
              <Image src="./images/clients/client-2.png" className="img-fluid" />
            </Col>
            <Col>
              <Image src="./images/clients/client-3.png" className="img-fluid" />
            </Col>
            <Col>
              <Image src="./images/clients/client-4.png" className="img-fluid" />
            </Col>
            <Col>
              <Image src="./images/clients/client-5.png" className="img-fluid" />
            </Col>
            <Col>
              <Image src="./images/clients/client-6.png" className="img-fluid" />
            </Col>
            <Col>
              <Image src="./images/clients/client-7.png" className="img-fluid" />
            </Col>
            <Col>
              <Image src="./images/clients/client-8.png" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <div className="additional border-0" id="contact"></div>
    </>
  );
}

export default ClientList;
