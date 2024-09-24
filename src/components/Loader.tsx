import React, { FC } from "react";
import "./Loader.css";

const Loader: FC = () => {
  return (
    // body
    <div className="flex justify-center items-center min-h-[100vh] overflow-hidden">
      {/* container */}
      <div className="relative w-full">
        {/* box */}
        <div className="relative flex justify-center items-center w-full animate-box">
          {/* cube */}
          <div className="relative w-[200px] h-[200px] bg-[#03e9f4] boxShadow-custom animation-cube" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
