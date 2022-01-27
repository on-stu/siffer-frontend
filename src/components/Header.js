import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import { VscThreeBars } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed !important;
  .right {
    display: flex;
    align-items: center;
    position: relative;
  }
  .con {
    width: 100%;
    padding: 20px;
    padding-top: 40px;
    top: 0;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
  }
  ${(props) =>
    props.background && "background-color: rgba(255, 255, 255, 0.5);"}
  z-index: 10;

  .menuButtonContainer {
    display: flex;
    flex-direction: column;
    top: -100px;
    opacity: 0;
    transition: 600ms ease-in-out;
    position: absolute;
    visibility: hidden;
  }
  .menuButtonContainer.active {
    opacity: 100;
    top: 0;
    visibility: visible;
  }
  .menuButton {
    visibility: visible;
    transition: 100ms ease-in-out;
  }
  .menuButton.active {
    visibility: hidden;
    opacity: 0;
  }
  @media all and (min-width: 768px) {
    .logo {
      cursor: pointer;
    }
    .menuButton {
      cursor: pointer;
    }
  }
`;

const SignUpButton = styled.button`
  background-color: white;
  border: 2px solid black;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 15px;
  color: black;
  font-weight: 700;
  margin-right: 20px;
  @media all and (min-width: 768px) {
    cursor: pointer;
  }
`;

const MenuButton = styled.button`
  ${(props) =>
    props?.mode === "lightgray"
      ? "background-color: #E5E5E5; border: 2px solid #E5E5E5; color: black;"
      : props?.mode === "gray"
      ? `background-color: #4E4E4E;
  border: 2px solid #4E4E4E;
  color: white;`
      : `background-color: black;
  border: 2px solid black;
  color: white;`}

  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 15px;
  margin-bottom: 10px;
  font-weight: 700;
  margin-right: 20px;

  @media all and (min-width: 768px) {
    cursor: pointer;
  }
`;

const Header = ({ background, setSideBar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <>
      {location.pathname !== "/signup" && (
        <Container background={background}>
          <div className="con">
            <img
              src={Logo}
              className="logo"
              style={{ zIndex: 12 }}
              onClick={() => navigate("/")}
            />
            <span className="right">
              <SignUpButton onClick={() => navigate("/signup")}>
                Sign up
              </SignUpButton>
              <div className="menu">
                <div
                  className={
                    dropMenu
                      ? "menuButtonContainer active"
                      : "menuButtonContainer"
                  }
                >
                  <MenuButton onClick={() => setDropMenu(false)}>
                    Menu
                  </MenuButton>
                  <MenuButton
                    mode="lightgray"
                    onClick={() => {
                      navigate("/about");
                      setDropMenu(false);
                    }}
                  >
                    About
                  </MenuButton>
                  <MenuButton
                    mode="lightgray"
                    onClick={() => {
                      navigate("/");
                      setDropMenu(false);
                    }}
                  >
                    My size
                  </MenuButton>
                  <MenuButton mode="lightgray">Store</MenuButton>
                  <MenuButton
                    mode="lightgray"
                    onClick={() => {
                      navigate("/contents");
                      setDropMenu(false);
                    }}
                  >
                    Community
                  </MenuButton>
                  <MenuButton mode="gray">내 계정</MenuButton>
                  <MenuButton mode="gray">고객센터</MenuButton>
                </div>

                <VscThreeBars
                  className={dropMenu ? "menuButton active" : "menuButton"}
                  onClick={() => setDropMenu(true)}
                />
              </div>
            </span>
          </div>
        </Container>
      )}
    </>
  );
};

export default Header;
