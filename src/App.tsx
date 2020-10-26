import React from "react";
import "./App.css";

import { Container } from "./styles";

import Header from "./components/header";
import RowSwiper from "./components/main/index.js";

function App() {
  return (
    <Container>
      <div className="header">
        <Header />
      </div>
      <div className="RowSwiper" style={{ paddingLeft: "3rem" }}>
        <RowSwiper text="Populares na Netflix" deviceType="desktop" />
        <RowSwiper text="Em alta" deviceType="desktop" />
        <RowSwiper
          text="Continuar assistindo como Marcelo"
          deviceType="desktop"
        />
        <RowSwiper text="Assistir novamente" deviceType="desktop" />
        <RowSwiper text="Originais Netflix" deviceType="desktop" />
        <RowSwiper text="Produções de Holywood" deviceType="desktop" />
      </div>
    </Container>
  );
}

export default App;
