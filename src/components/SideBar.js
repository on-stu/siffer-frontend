import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SidebarCon = styled.div`
  position: fixed;
  background-color: ${(props) =>
    props.visible ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  z-index: 100;
  top: 0;
  left: 0;
  width: fit-content;
  height: 100%;

  .navContainer {
    position: fixed;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: black;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    box-sizing: border-box;
    transition: 600ms ease-in-out;
  }
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navContainer.active {
    left: 0;
  }
  .middle {
    color: #02cb77;
    margin-top: 30%;
  }
  .bottom {
    color: #02cb77;
    margin-top: 30%;
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  li {
    font-size: 30px;
    cursor: pointer;
  }

  .closeButton {
    cursor: pointer;
  }
`;

const SideBar = ({ visible, setVisible }) => {
  const navigate = useNavigate();
  return (
    <>
      <SidebarCon visible={visible}>
        <div className={visible ? "navContainer active" : "navContainer"}>
          <div className="top">
            <img src={Logo} />
            <AiOutlineClose
              onClick={() => setVisible(false)}
              className="closeButton"
              color="#02CB77"
              size={40}
            />
          </div>
          <div className="middle">
            <ul>
              <li
                onClick={() => {
                  navigate("/about");
                  setVisible(false);
                }}
              >
                ABOUT
              </li>
              <li
                onClick={() => {
                  navigate("/");
                  setVisible(false);
                }}
              >
                SIZE SEARCH
              </li>
              <li
                onClick={() => {
                  navigate("/mysize");
                  setVisible(false);
                }}
              >
                MY SIZE
              </li>
              <li>STORE</li>
              <li
                onClick={() => {
                  navigate("/contents");
                  setVisible(false);
                }}
              >
                CONTENTS
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul>
              <li>MY</li>
              <li>고객센터</li>
            </ul>
          </div>
        </div>
      </SidebarCon>
    </>
  );
};

export default SideBar;
