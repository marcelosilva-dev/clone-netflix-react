import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { FiSearch, FiBell, FiGift, FiArrowDown } from "react-icons/fi";

interface NavBarProps {
  className: string;
}

const NavBar: React.FC<NavBarProps> = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (window) {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setScrolling(false);
        } else if (window.scrollY > 50) {
          setScrolling(true);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [window]);
  return (
    <Container>
      <nav className={scrolling ? "black" : ""}>
        <ul className="navigation__container">
          <img className="navigation__container--logo" src={logo} alt="" />
          {/* <DropdownArrow className="navigation__container--downArrow-2"></DropdownArrow> */}
          <li className="bold">Inicio</li>
          <li>Series</li>
          <li>Filmes</li>
          <li>Mais recentes</li>
          <li>Minha lista</li>

          <div className="navigation-left">
            <FiSearch style={{ justifyContent: "center" }} size={60} />
            <FiGift style={{ justifyContent: "center" }} size={60} />
            <FiBell
              style={{ justifyContent: "center", marginRight: "5px" }}
              size={60}
            />
            <img
              style={{
                borderRadius: "8px",
                padding: "0rem",
                maxHeight: "32px",
                alignContent: "center",
              }}
              src={avatar}
            />
            <FiArrowDown
              style={{ justifyContent: "flex-start", padding: "0 0 0 0.5rem" }}
              size={20}
            />
          </div>
        </ul>
      </nav>
    </Container>
  );
};

export default NavBar;
