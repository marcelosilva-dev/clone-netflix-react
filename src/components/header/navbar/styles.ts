import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100vw;
  max-height: 68px;
  background: transparent;
  color: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  transition-timing-function: ease-in;
  transition: all 1s;
  font-size: 14px;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );

  svg {
    padding: 1rem;
    align-items: center;
  }

  div.navigation-left {
    flex-grow: 1;
    color: #fff;
    padding-right: 7rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  img {
    max-height: 48px;
    padding: 0 1rem 0 0;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;

    .bold {
      font-weight: bold;
    }

    li {
      height: 100%;
      align-items: center;
      text-decoration: none;
      list-style: none;
      padding: 0.5rem;
      cursor: pointer;

      &:hover {
        color: ${shade(0.2, "#e5e5e5")};
      }
    }
  }

  nav {
    width: 100%;
  }

  .black {
    background: #000;
  }
`;
