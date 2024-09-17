import React, { FC } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import Hero from "./Hero";
import Skills from "./Skills";

const AppLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Main />
      <Footer />
    </>
  );
};
export default AppLayout;
