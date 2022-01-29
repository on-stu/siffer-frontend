import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2063e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .card {
    display: flex;
    width: 267px;
    height: 277px;
    background-image: url("/images/unsplash/3.jpg");
    background-position: center center;
    background-size: cover;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    flex-direction: column;
    font-weight: 700;
    justify-content: flex-end;
    align-items: center;
  }
  .card > span {
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 40px;
    padding: 20px;
    box-sizing: border-box;
  }
  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer {
    position: absolute;
    bottom: 0;
    padding-bottom: 20px;
  }
  .text {
    font-size: 26px;
    font-weight: 300;
  }
  .title {
    font-size: 50px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const StorePage = () => {
  return (
    <Container>
      <div className="card">
        <span>STORE</span>
      </div>
      <div className="texts">
        <span className="title">Soon !</span>
        <span className="text">곧 ! 찾아올게요.</span>
        <span className="text">조금만 기다려주세요.</span>
      </div>
      <div className="footer">
        <img src={Logo} />
      </div>
    </Container>
  );
};

export default StorePage;
