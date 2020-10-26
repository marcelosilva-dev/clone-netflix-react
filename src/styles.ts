import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;

  grid-template:
    "header" 0.7fr
    "main" 1fr
    / 100%;

  background-color: #141414;
`;
