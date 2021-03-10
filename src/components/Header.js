import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [navLinks, setNavLinks] = useState([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ]);

  return (
    <header>
      <ul>
        {navLinks.map((link) => {
          return (
            <li>
              <NavLink
                exact
                to={link.path}
                className="App-link"
                activeClassName="selected"
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
