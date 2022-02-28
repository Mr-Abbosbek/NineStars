import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { Label } from "reactstrap";
import Iframe from "react-iframe";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

function ContactList() {
  return (
    <section className="contactList">
      <Container>
        <Row>
          <Col className="text-center m-0 pb-4">
            <h3 className="all-title">Contact Us</h3>
            <h2 className="fw-bold m-0">Contact us the get started</h2>
            <div className="d-flex justify-content-center">
              <hr className="line-red" />
            </div>
          </Col>
        </Row>
        <Row className="row-all justify-content-between m-0">
          <Col className="shadow col-lg-5 col-md-12 col-sm-12 col-12 px-4 px-sm-5 px-md-5 px-lg-5 mb-lg-0 mb-md-5 mb-sm-5 mb-5 contact-address py-5">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <div className="d-flex align-items-center">
                      <p className="contact-icons m-0">
                        <BiMap />
                      </p>
                      <h4 className="fw-bold m-0 address-title">Location:</h4>
                    </div>
                    <div className="address-text">
                      <p className="opacity-50">
                        A108 Adam Street, New York, NY 535022
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex align-items-center">
                  <p className="contact-icons m-0">
                    <BiEnvelope />
                  </p>
                  <h4 className="fw-bold m-0 address-title">Email</h4>
                </div>
                <div className="address-text">
                  <p className="opacity-50">Info@Example.Com</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex align-items-center">
                  <p className="contact-icons m-0">
                    <BiPhone />
                  </p>
                  <h4 className="fw-bold m-0 address-title">Phone</h4>
                </div>
                <div className="address-text">
                  <p className="opacity-50">+998777777777</p>
                </div>
                <div>
                     <Iframe
                     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d367.2906391644586!2d71.19794172221805!3d40.44088050138671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1644569595568!5m2!1suz!2s"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
                </div>
              </Col>
            </Row>
          </Col>

          <Col className="shadow col-lg-6 col-md-12 col-sm-12 col-12 px-4 px-sm-5 px-md-5 px-lg-5 contact-form py-5">
            <form>
              <Label>Your Name</Label>
              <MyInput className="form-control" placeholder="Name" />
              <Label className="pt-2">Your Email</Label>
              <MyInput className="form-control" placeholder="Email" />
              <Label className="pt-2">Subject</Label>
              <MyInput className="form-control" placeholder="Subject" />
              <Label className="pt-2">Message</Label>
              <textarea className="form-control mb-4 contact-textarea" placeholder="Message..."></textarea>
              <MyButton id="button-contact">Send Message</MyButton>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactList;
