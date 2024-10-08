import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/LOGO PC IPM KARANGANYAR (6).png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="PC IPM Karanganyar" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>PC IPM Karanganyar</h2>
              <p>
                Pimpinan Cabang Ikatan Pelajar Muhammadiyah (PC IPM) Karanganyar merupakan organisasi yang bergerak dalam pembinaan pelajar untuk membangun generasi muda yang berakhlak, kreatif, dan mandiri. Kami berkomitmen untuk menciptakan lingkungan pendidikan yang berorientasi pada pengembangan karakter Islami.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={20} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Program Kegiatan</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={30} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Anggota Terlibat</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={20} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Sekolah dan Madrasah</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;