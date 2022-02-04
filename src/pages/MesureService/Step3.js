import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/UseWindowDimensions";

const Step3 = ({ setCurrent }) => {
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <>
      <div className="contents">
        <span style={{ marginTop: "20px", fontSize: "20px" }}>시간</span>
        <StyledInput />
      </div>
      <div className="buttons">
        {width > 768 && (
          <Styledbutton backgroundColor="#8B8A8A" onClick={() => navigate(-1)}>
            Back
          </Styledbutton>
        )}
        <Styledbutton backgroundColor="#FF244D" onClick={() => setCurrent(2)}>
          Success
        </Styledbutton>
      </div>
    </>
  );
};

export default Step3;

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
