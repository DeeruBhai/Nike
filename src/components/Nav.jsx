import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ACP from "./ACP";
function Nav() {
  const [hamClick, setHamClick] = useState(false);

  return (
    <header
      className="px-8 py-8 absolute z-10 w-full 
    "
    >
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img src={headerLogo} alt="headerlogo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ACP />
      </nav>
    </header>
  );
}

export default Nav;
