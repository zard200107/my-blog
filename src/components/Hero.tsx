import React, { FC } from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ShinyEffect from "./ShinyEffect";

const Hero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <TypeAnimation />
      </motion.div>
    </div>
  );
};

export default Hero;
