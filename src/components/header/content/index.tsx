import React from "react";
import { Container } from "./styles";

import RowSwiper from "../../main/index.js";

import mainImg from "../../assets/main.png";
import { ImPlay3, ImInfo } from "react-icons/im";
import { GiPodium } from "react-icons/gi";

interface ContentProps {
  className: string;
}

const ContentHeader: React.FC<ContentProps> = () => {
  return (
    <Container>
      <div className="header__container">
        <img src={mainImg} />
        <p className="header__container-overview">
          <GiPodium />
          Top 5 de hoje no Brasil
        </p>
        <p className="header__container-overview">
          Ele foi atingido por um raio e ganhou o poder da velocidade. Para a
          bandidadem correr é inútil.
        </p>
        <div className="buttons">
          <button onClick={() => alert("not a movie!")}>
            <ImPlay3 />
            Assistir
          </button>
          <button className="btn_info">
            <ImInfo />
            Mais Informações
          </button>
        </div>
      </div>
      <div
        className="RowSwiper"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "flex-end",
          flex: 1,
        }}
      >
        <RowSwiper text="Populares na Netflix" deviceType="desktop" />
      </div>
    </Container>
  );
};

export default ContentHeader;
