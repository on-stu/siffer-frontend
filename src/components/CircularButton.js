import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.width ? props.width + "px" : "100px")};
  height: ${(props) => (props.height ? props.height + "px" : "50px")};
  border-radius: ${(props) =>
    props.height ? props.height / 2 + "px" : "25px"};
  font-size: 18px;
  background-color: black;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;

const CircularButton = ({ width, height, children }) => {
  return (
    <Button width={width} height={height}>
      {children}
    </Button>
  );
};

export default CircularButton;
