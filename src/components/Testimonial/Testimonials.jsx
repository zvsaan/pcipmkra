import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img2020 from "../../assests/images/10.png";
import img2022 from "../../assests/images/9.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            {/* Static Heading */}
            <h2 className="mb-4 text-center">Ketua Umum</h2>
            
            <div className="testimonial__wrapper">
              <Slider {...settings}>
                {/* Slide 1: Ketua Umum 2020/2022 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="testimonial__img w-50">
                    <img src={img2020} alt="Ketua Umum 2020/2022" className="w-100" />
                  </div>
                  <div className="testimonial__content w-50">
                    <p>
                      "Menjadi pemimpin organisasi yang berperan dalam membentuk
                      karakter dan memberikan kontribusi positif adalah pengalaman yang
                      sangat berharga."
                    </p>
                    <div className="student__info mt-4">
                      <h6 className="fw-bold">Zidane Arrazzak Azmi Habibi</h6>
                      <p>Ketua Umum Periode 2020/2022</p>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Ketua Umum 2022/2024 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="testimonial__img w-50">
                    <img src={img2022} alt="Ketua Umum 2022/2024" className="w-100" />
                  </div>
                  <div className="testimonial__content w-50">
                    <p>
                      "Periode ini adalah tentang inovasi dan kolaborasi untuk membawa
                      perubahan positif bagi organisasi dan masyarakat."
                    </p>
                    <div className="student__info mt-4">
                      <h6 className="fw-bold">Muhammad Ilham Surya Saputra</h6>
                      <p>Ketua Umum Periode 2022/2024</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;