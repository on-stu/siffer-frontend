import React from "react";
import styled from "styled-components";
import Congratulate from "../icons/Congratulate.svg";
import Finger from "../icons/Finger.svg";
import Gift from "../icons/Gift.svg";
import Ruler from "../icons/Ruler.svg";
import Keyboard from "../icons/Keyboard.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 500px;
  background-color: #f0f0f0;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 6px;
  font-weight: 600;
  font-size: 18px;
  span {
    margin-left: 12px;
  }
  margin-bottom: 12px;
`;

const SmallBanner = ({ icon, title }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "congratulate":
        return Congratulate;
      case "finger":
        return Finger;
      case "gift":
        return Gift;
      case "ruler":
        return Ruler;
      case "keyboard":
        return Keyboard;
      default:
        return Finger;
    }
  };

  return (
    <Container>
      <img src={getIcon(icon)} />
      <span>{title}</span>
    </Container>
  );
};

export default SmallBanner;
