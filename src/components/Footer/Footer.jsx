import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Beranda",
    url: "#",
  },
  {
    display: "Tentang Kami",
    url: "#",
  },
  {
    display: "Hubungi Kami",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Kebijakan Privasi",
    url: "#",
  },
  {
    display: "Keanggotaan",
    url: "#",
  },
  {
    display: "FAQ",
    url: "#",
  },
  {
    display: "Syarat & Ketentuan",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              PC IPM Karanganyar
            </h2>

            <div className="follows">
              <p className="mb-0">Ikuti kami di media sosial</p>
              <span>
                {" "}
                <a href="https://www.facebook.com" target="_blank">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/pc_ipmkra" target="_blank">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Jelajahi</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Informasi</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Kontak Kami</h6>

            <p>Alamat: <br/>Karanganyar, Jawa Tengah</p>
            <p>Email: <br/>pimpinancabangipmkra@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;