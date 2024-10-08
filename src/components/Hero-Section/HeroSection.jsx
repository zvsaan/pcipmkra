import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h1 className="mb-4 hero__title">
                <strong>Pimpinan Cabang </strong><br /> 
                <span className="text__hero">Ikatan <br/>Pelajar<br /> Muhammadiyah</span>
              </h1>
              <p className="mb-5">
                Pelajar beriman, berilmu, dan beraksi<br/> untuk perubahan dan 
                sebagai Wadah pengembangan karakter <br/> dan prestasi pelajar 
                berlandaskan nilai Islam.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
