/* eslint-disable  */

import React, { useState, FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

// NavLink 用于页面间的导航，而 react-scroll 的 Link 用于页面内的滚动导航。

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-400 texl-xl items-center px-12 h-20">
        <a href="#">Refrain</a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <ScrollLink to="skills" smooth={true} offset={50} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li>
              <ScrollLink
                to="skills"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Portfolio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
