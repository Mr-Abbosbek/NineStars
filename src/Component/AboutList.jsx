import React from 'react';
import { Col, Container, Image, Row } from "react-bootstrap";
import { BiCubeAlt, BiReceipt } from "react-icons/bi";


function AboutList() {
  return (
    <>
      <section className='aboutList' id='about'>
      <Container className='all-container'>
        <Row className='row-all'>

          <Col className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  about-col d-flex flex-wrap pt-xl-0 pt-lg-0 pt-md-4 pt-sm-4 pt-4'>
            <Image src='./images/about-img.svg' className='img-fluid' />
          </Col>
          
          <Col className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 about-col2 pt-xl-0 pt-lg-0 pt-md-5 pt-sm-5 pt-5'>
            <h1 className="fw-bold">Valuation sign tempore provident quasi</h1>
            <p>Lorem ipsum dolor sit amt, const adiPisCin elite, sed do eiMod tempore ut libre et dolor magna alq. DuIs ute Iru dolor in ipsum dolor adiPisCin tempore der</p>
            
            <Row className='d-flex flex-wrap justify-content-between pt-2'>
              <Col className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 about-col2-col'>
                <BiReceipt className='about-icon' />
                <h5>Corpora valuation sit</h5>
                <p>ConsQun sun aut elite quasi enIm aliQuam quae harm parIat liBoris nisi ut aliQuip</p>
              </Col>
              
              <Col className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 about-col2-col'>
                <BiCubeAlt className='about-icon' />
                <h5>UlLine laBoris nisi</h5>
                <p>Except sint culpaCat cupData non proIdent, sun in culpa qui office desRunt</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </section>
      <div className="additional" id="services"></div>
    </>
    
  );
}

export default AboutList;