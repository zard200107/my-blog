/* eslint-disable  */

import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
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
      <div className="max-w-[1300px] mx-auto bg-green-200 flex justify-between text-gray-400 texl-xl items-center px-12 h-20">
        <a href="#">Refrain</a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
