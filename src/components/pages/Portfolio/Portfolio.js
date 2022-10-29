import React from "react";
import Project from "./Project";
import styled from "styled-components";

const Portfolio = styled.div`
  height: 80vh;
  margin-left: 2%;
  margin-right: 2%;
`;

export default function renderPortfolio() {
  return (
    <Portfolio>
      <h1>Portfolio</h1>
      <Project />
    </Portfolio>
  );
}
