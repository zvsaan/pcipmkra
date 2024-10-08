import React, { Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import Features from "../components/Feature-section/Features";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <Features />
      <Testimonials />
      <Newsletter />
    </Fragment>
  );
};

export default Home;
