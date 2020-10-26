import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWR6-pUbyqY7R_mVzbQL1GyAf4SSyTrpZxdv3VRU1NLwkgvcOxXWzf9eeYnMCNWFnFf1lPYcDLLZ5Fq6ueNF8Nn3PGNA.webp?r=fc1");
  color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  div.header__container {
    width: 100%;
    padding-left: 5rem;
    margin-top: 13rem;
  }

  div.RowSwiper {
    padding-left: 3rem;
    background-image: linear-gradient(
      to top,
      rgba(20, 20, 20, 1) 50%,
      rgba(0, 0, 0, 0)
    );
  }

  p {
    width: 50%;
    font-size: 2rem;
  }

  div.buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #ffffff;
    margin-bottom: 10rem;

    button {
      border: none;
      max-width: 100%;
      max-height: 100%;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      color: #000000;
      padding: 1.2rem 1.2rem 1.2rem 1.2rem;
      font-size: 1.5rem;
      margin-right: 1rem;
      border-radius: 4px;
      font-weight: bold;

      &:hover {
        background-color: ${shade(0.2, "#ffffff")};
        color: #000000;
      }

      svg {
        margin-right: 4px;
      }
    }

    button.btn_info {
      background-color: #696969;
      border: none;
      color: #ffffff;

      &:hover {
        background-color: ${shade(0.2, "#696969")};
      }
    }
  }
`;
