import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import Calendar from "../../components/Calendar";

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
        <Calendar />
      </div>
      <div className="buttons">
        {width > 768 && (
          <Styledbutton backgroundColor="#8B8A8A" onClick={() => setCurrent(1)}>
            Back
          </Styledbutton>
        )}
        <Styledbutton backgroundColor="#02CB77" onClick={() => setCurrent(3)}>
          Next
        </Styledbutton>
      </div>
    </>
  );
};

export default Step2;

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
