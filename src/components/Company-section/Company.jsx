import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaChalkboardTeacher, FaBook, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';

const Company = () => {
  const textItems = [
    { icon: <FaChalkboardTeacher />, text: "Tarbiyah" },
    { icon: <FaBook />, text: "Pelatihan" },
    { icon: <FaUsers />, text: "Sosial" },
    { icon: <FaLightbulb />, text: "Kajian" },
    { icon: <FaAward />, text: "Kepemimpinan" },
  ];

  return (
    <section>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          {textItems.map((item, index) => (
            <Col lg="auto" md="auto" sm="auto" xs="auto" key={index}>
              <h5 className="d-flex align-items-center gap-3">
                {item.icon} <TypingEffect text={item.text} />
              </h5>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

// TypingEffect component that coordinates the typing effect for all items
const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = 300; // Adjust typing speed here (ms)
  const resetDelay = 2000; // Delay before restarting after finishing (ms)

  useEffect(() => {
    let intervalId;

    // Only start typing when all texts are reset together
    const startTyping = () => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }
      }, typingSpeed);
    };

    // Reset text after all texts are done typing
    const resetTyping = () => {
      setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, resetDelay);
    };

    // Start the typing effect
    startTyping();

    // Cleanup interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex, text, typingSpeed, resetDelay]);

  return <span>{displayedText}</span>;
};

export default Company;