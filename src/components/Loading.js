import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 270px;
    filter: ${(props) =>
      props.percent ? `grayscale(${100 - props.percent}%)` : `grayscale(100%)`};
  }
  .barBack {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #e5e5e5;
    width: 356px;
    height: 12px;
    margin-top: 100px;
    border-radius: 10px;
    padding: 0px 4px;
    box-sizing: border-box;
  }
  .bar {
    width: ${(props) => props.percent}%;
    height: 6px;
    background-color: #8b8a8a;
    border-radius: 10px;
  }
`;
const Loading = ({ percent }) => {
  return (
    <Container percent={percent}>
      <img src={Logo} className="logo" />
      <div className="barBack">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Loading;
