import React from "react";

interface ShinyEffectProps {
  styles: {
    left?: number;
    right?: number;
    top: number;
    size?: number;
  };
}

const ShinyEffect: React.FC<ShinyEffectProps> = ({ styles }) => {
  const { left, right, top, size = 500 } = styles;

  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    left: left ? `${left}px` : "auto",
    right: right ? `${right}px` : "auto",
    zIndex: -1,
  };

  return <div className="shiny-effect" style={positionStyles}></div>;
};

export default ShinyEffect;
