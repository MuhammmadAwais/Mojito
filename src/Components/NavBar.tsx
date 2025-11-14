import React from 'react'
import { navLinks } from "../../constants/index";

const NavBar : React.FC = () => {
  return (
    <nav>
      <a href="#home" className="flex items-center gap-2">
        <p>Velvet Pour</p>
      </a>
      <ul></ul>
    </nav>
  );
}

export default NavBar
