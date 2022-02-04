import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Top = ({ setCurrent, title, backButton, current }) => {
  const navigate = useNavigate();
  const onClick = () => {
    if (current === 1) {
      navigate(-1);
    } else {
      setCurrent(current - 1);
    }
  };
  return (
    <Container>
      <span onClick={onClick}>
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
