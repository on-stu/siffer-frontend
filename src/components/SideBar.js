import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import { AiOutlineClose } from "react-icons/ai";

const Container = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: black;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .closeButton {
    cursor: pointer;
  }
`;

const SideBar = ({ visible, setVisible }) => {
  return (
    <>
      {visible && (
        <Container>
          <div className="top">
            <img src={Logo} />
            <AiOutlineClose
              onClick={() => setVisible(false)}
              className="closeButton"
              color="#02CB77"
              size={40}
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default SideBar;
