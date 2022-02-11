import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import DataBase from "./database/base";

function TeamList() {
  return (
    <>
      <section className="teamList">
        <Container>
          <Row>
            <Col className="text-center m-0 ">
              <h3 className="all-title">Team</h3>
              <h2 className="fw-bold m-0">Our team is always here to help</h2>
              <div className="d-flex justify-content-center">
                <hr className="line-red" />
              </div>
            </Col>
          </Row>
          <div className="row-all team-blogs m-0">
            {DataBase.date4.map((post, id) => (
              <div className="text-center p-0 team-blog shadow" key={id}>
                <Image src={post.image} className="img-fluid" />
                <div className="team-icons">
                  <p>{post.icon_1}</p>
                  <p>{post.icon_2}</p>
                  <p>{post.icon_3}</p>
                  <p>{post.icon_4}</p>
                </div>
                <div className="team-title">
                  <div>
                    <h5 className="fw-bold">{post.name}</h5>
                    <p>{post.jobs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default TeamList;
