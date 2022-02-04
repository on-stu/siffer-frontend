import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  .top {
    height: 30%;
    width: 100%;
    color: white;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttons {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .innerContainer {
    width: 100%;
    max-width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
`;

const Styledbutton = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px;
  color: black;
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
`;

const Sign0 = ({ setCurrent }) => {
  return (
    <Container>
      <div className="innerContainer">
        <div className="top">
          <span className="title">Sign Up</span>
        </div>
        <div className="buttons">
          <Styledbutton backgroundColor="white" onClick={() => setCurrent(1)}>
            이메일로 회원가입
          </Styledbutton>
          <Styledbutton backgroundColor="#FFEE57">
            카카오톡 계정으로 계속
          </Styledbutton>
          <Styledbutton backgroundColor="#2164E5">
            페이스북 계정으로 계속
          </Styledbutton>
        </div>
      </div>
    </Container>
  );
};

export default Sign0;
