import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
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
        {/* */}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setHamClick(true)}
          />
        </div>
        {hamClick && (
          <div className="fixed h-full w-screen lg:hidden bg-slate-gray/50 backdrop-blur-sm top-0 left-0 z-20 transition-all delay-75">
            <div className="text-slate-gray bg-white flex-col absolute right-0 top-0 h-full p-8  z-50 flex">
              <div className="self-end">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-coral-red mb-8 text-4xl cursor-pointer mt-0"
                  onClick={() => setHamClick(false)}
                />
              </div>
              <ul className="flex-1 flex-col flex justify-center items-center gap-16 p-12">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.href}
                      className="font-montserrat leading-normal text-3xl text-slate-gray hover:text-coral-red"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;
