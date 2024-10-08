import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Meningkatkan Keimanan dan Ketaqwaan",
    desc: "Meningkatkan keimanan dan ketaqwaan pelajar Muhammadiyah kepada Allah SWT.",
    icon: "ri-heart-2-line",  // Icon representing spirituality or devotion
  },

  {
    title: "Menumbuhkan Karakter Pelajar",
    desc: "Menumbuhkan karakter pelajar Muhammadiyah yang modern melalui kegiatan yang unik, positif, dan menarik.",
    icon: "ri-lightbulb-line",  // Icon representing character and creativity
  },

  {
    title: "Mengembangkan Minat dan Bakat",
    desc: "Mengembang dan menyalurkan minat bakat pelajar Muhammadiyah menuju pelajar berprestasi dengan cara bekerja sama dengan organisasi lain.",
    icon: "ri-award-line",  // Icon representing talent and achievement
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
