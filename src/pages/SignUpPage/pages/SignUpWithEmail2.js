import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  .top {
    margin-top: 40px;
    width: 100%;
    color: white;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    box-sizing: border-box;
    align-items: center;
  }
  .contents {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: white;
    padding: 20px;
  }
  .buttons {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledInput = styled.input`
  margin: 6px 0;
  padding: 8px;
  border-radius: 4px;
  border: none;
`;

const Styledbutton = styled.button`
  width: 100px;
  border-radius: 30px;
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

const SignUpWithEmail2 = ({ setCurrent }) => {
  return (
    <Container>
      <div className="top">
        <span onClick={() => setCurrent(1)}>
          <IoIosArrowBack size={20} />
        </span>
        <span>이메일 회원가입</span>
        <span></span>
      </div>
      <div className="contents">
        <span style={{ marginTop: "20px", fontSize: "20px" }}>휴대폰 번호</span>
        <StyledInput />
        <span style={{ fontSize: "14px", fontWeight: "300" }}></span>
      </div>
      <div className="buttons">
        <Styledbutton backgroundColor="#02CB77" onClick={() => setCurrent(3)}>
          Next
        </Styledbutton>
      </div>
    </Container>
  );
};

export default SignUpWithEmail2;
