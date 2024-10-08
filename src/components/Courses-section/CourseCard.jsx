import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import courseImg from "../../assests/images/image.png"; // Gambar kegiatan

const EventsSection = () => {
  return (
    <section className="events-section">
      <Container>
        <div className="section-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">NAMA KEGIATAN</h2>
          <Button color="link" className="see-all-button">See All</Button>
        </div>
        
        <Row>
          {/* Gambar Kegiatan */}
          <Col lg="12" className="text-center mb-4">
            <div className="event-image-container">
              <img src={courseImg} alt="Kegiatan" className="event-image" />
            </div>
          </Col>
          
          {/* Kegiatan Lainnya */}
          <Col lg="12">
            {/* Tambahkan daftar kegiatan di sini jika perlu */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventsSection;