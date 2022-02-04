import React from "react";
import styled from "styled-components";
import Logo from "../../../images/Logo.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .top {
    margin-top: 20%;
    height: 30%;
    width: 100%;
    color: white;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .circleLogo {
    background-color: #02cb77;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    max-width: 200px;
    max-height: 200px;
    min-height: 200px;
    min-width: 200px;
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
  .title {
    margin-top: 20px;
    color: #02cb77;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;
  }
`;

const Styledbutton = styled.button`
  border-radius: 100px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px 20px;
  color: black;
  margin-top: 80px;
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 12px 20px;
  color: black;

  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
`;

const LogIn = ({ setCurrent }) => {
  return (
    <Container>
      <div className="innerContainer">
        <span className="circleLogo">
          <img src={Logo} size={10} />
        </span>
        <span className="title">SIFFER</span>
        <StyledInput
          backgroundColor="white"
          placeholder="Password"
          type="password"
        />

        <Styledbutton backgroundColor="#8B8A8A" onClick={() => setCurrent(0)}>
          Sign Up
        </Styledbutton>
      </div>
    </Container>
  );
};

export default LogIn;
