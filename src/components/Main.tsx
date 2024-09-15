import { Outlet } from "react-router-dom";
import React, { FC } from "react";

const Main: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Main;
