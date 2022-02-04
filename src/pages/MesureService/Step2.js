import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import useWindowDimensions from "../../hooks/UseWindowDimensions";

const Step2 = ({ setCurrent }) => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div className="top">
        <span onClick={() => setCurrent(1)}>
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
        <StyledInput />
        <span style={{ fontSize: "14px", fontWeight: "300" }}>
          9-20자 이내의 영문과 숫자의 조합으로 입력해주세요.
        </span>
      </div>
      <div className="buttons">
        {width > 768 && (
          <Styledbutton backgroundColor="#8B8A8A" onClick={() => setCurrent(1)}>
            Back
          </Styledbutton>
        )}
        <Styledbutton backgroundColor="#02CB77" onClick={() => setCurrent(2)}>
          Next
        </Styledbutton>
      </div>
    </>
  );
};

export default Step2;

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
  @media all and (min-width: 768px) {
    cursor: pointer;
  }
`;
