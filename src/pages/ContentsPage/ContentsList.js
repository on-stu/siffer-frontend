import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
  }
  .title {
    width: 100%;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 40px;
  }

  .representative {
    background-image: url("images/ContentsPage/Example/1.png");
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 10px;
  }
  .opacity {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #23181566;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .opacity > span {
    color: white;
  }
  .circle {
    color: #02cb77;
    border: 1px solid #02cb77;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 2px 30px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const ContentsList = () => {
  return (
    <Container>
      <div className="banner">
        <span className="title">Contents</span>
        <div className="representative">
          <div className="opacity">
            <div className="circle">New</div>
            <span style={{ fontSize: "26px", fontWeight: "600" }}>
              원마일웨어도 나답게
            </span>
            <span style={{ fontWeight: "500", marginBottom: "20px" }}>
              프리랜서의 주말
            </span>
            <span style={{ fontSize: "14px", fontWeight: "300" }}>
              # traning set-up #track pants
            </span>
          </div>
        </div>
      </div>
      this is list
    </Container>
  );
};

export default ContentsList;
