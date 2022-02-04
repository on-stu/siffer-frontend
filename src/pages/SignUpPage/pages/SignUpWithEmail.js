import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-top: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

  color: black;
  margin-bottom: 20px;
  padding: 10px;
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
`;

const SignUpWithEmail = ({ setCurrent }) => {
  return (
    <Container>
      <div className="innerContainer">
        <div className="top">
          <span onClick={() => setCurrent(0)}>
            <IoIosArrowBack size={20} />
          </span>
          <span>이메일 회원가입</span>
          <span></span>
        </div>
        <div className="contents">
          <span style={{ marginTop: "20px", fontSize: "20px" }}>이메일</span>
          <StyledInput />
          <span style={{ fontSize: "14px", fontWeight: "300" }}>
            이메일이 정상입니다.
          </span>
          <span style={{ marginTop: "20px", fontSize: "20px" }}>비밀번호</span>
          <StyledInput type="password" />
          <span style={{ fontSize: "14px", fontWeight: "300" }}>
            9-20자 이내의 영문과 숫자의 조합으로 입력해주세요.
          </span>
        </div>
        <div className="buttons">
          <Styledbutton backgroundColor="#02CB77" onClick={() => setCurrent(2)}>
            Next
          </Styledbutton>
        </div>
      </div>
    </Container>
  );
};

export default SignUpWithEmail;
