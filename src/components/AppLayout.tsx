import React, { FC } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};
export default AppLayout;
