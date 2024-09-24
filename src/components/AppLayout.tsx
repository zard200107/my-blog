import React, { FC } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import Hero from "./Hero";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import Loader from "./Loader";

const AppLayout: React.FC = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Main />
      <Footer />
    </>
  );
};
export default AppLayout;
