import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.width ? props.width + "px" : "100px")};
  height: ${(props) => (props.height ? props.height + "px" : "50px")};
  border-radius: ${(props) =>
    props.height ? props.height / 2 + "px" : "25px"};
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) => (props.white ? "white" : "black")};
  color: ${(props) => (props.white ? "black" : "white")};
  border: ${(props) => (props.white ? "2px solid black" : "none")};
  outline: none;
  cursor: pointer;
`;

const CircularButton = ({ width, height, children, onClick, style, white }) => {
  return (
    <Button
      width={width}
      style={style}
      height={height}
      onClick={onClick}
      white={white}
    >
      {children}
    </Button>
  );
};

export default CircularButton;
