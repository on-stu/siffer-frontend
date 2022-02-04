import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const Top = ({ setCurrent, title, backButton }) => {
  return (
    <Container>
      <span onClick={() => setCurrent(1)}>
        {backButton && <IoIosArrowBack size={20} />}
      </span>
      <span>{title}</span>
      <span></span>
    </Container>
  );
};

const Container = styled.div`
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
`;

export default Top;
