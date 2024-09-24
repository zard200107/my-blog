import React, { FC } from "react";
import "./Loader.css";

const Loader: FC = () => {
  return (
    <div className="loader-body">
      <div className="loader-container">
        <div className="loader-box">
          <div className="loader-cube" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
