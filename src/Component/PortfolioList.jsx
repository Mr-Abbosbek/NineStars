import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import DataBase from "./database/base";
import MyFilter from "./UI/Filter/MyFilter";

function PortfolioList() {
  const [filter, setFilter] = useState(DataBase.portfolio);

  const filterBlog = (filter) => {
    if (filter === "all") {
      setFilter(DataBase.portfolio);
      return;
    }
    const newBase = DataBase.portfolio.filter((item) => item.marka === filter);
    setFilter(newBase);
  };

  return (
    <>
      <section className="portfolioList">
        <Container>
          <Row>
            <Col className="text-center m-0 ">
              <h3 className="all-title">Portfolio</h3>
              <h2 className="fw-bold m-0">Check out our beautiful portfolio</h2>
              <div className="d-flex justify-content-center">
                <hr className="line-red" />
              </div>
            </Col>
          </Row>
          <MyFilter filterBlog={filterBlog} />
          <div className="row-all portfolio-blogs m-0">
            {filter.map((post, id) => (
              <div className="portfolio-blog text-center shadow" key={id}>
                <div className="portfolio-icons">
                  <div className="col-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-around align-items-center">
                    <h6><button className="w-100 h-100">{post.icon_1}</button></h6>
                    <h6><button className="w-100 h-100">{post.icon_2}</button></h6>
                  </div>
                </div>
                <Image src={post.image} className="img-fluid" />
                <div className="portfolio-text">
                  <h6 className="blog-title pb-1">{post.title}</h6>
                  <h6 className="m-0 blog-text">{post.marka}</h6>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default PortfolioList;
