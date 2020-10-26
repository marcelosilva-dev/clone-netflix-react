import React from "react";

import NavBar from "./navbar";
import ContentHeader from "./content";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <NavBar className="header" />
      <ContentHeader className="contentHeader" />
    </Container>
  );
};

export default Header;
