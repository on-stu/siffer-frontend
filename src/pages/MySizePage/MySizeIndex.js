import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CircularButton from "../../components/CircularButton";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 15% 25% 30% 30%;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttonCard {
    width: 150px;
    height: 150px;
    border: 2px solid black;
    border-radius: 18px;
    font-size: 20px;
    display: flex;
    font-weight: 600;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .buttonCard.active {
    background-color: #02cb77;
  }
  .each {
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
  }
  .item2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const MySizeIndex = () => {
  const [isSelf, setIsSelf] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <div></div>
      <div className="item">
        <span style={{ fontSize: "24px", fontWeight: "300" }}>
          내 사이즈 등록 및 관리
        </span>
        <span style={{ fontSize: "40px", fontWeight: "700" }}>
          My body size
        </span>
      </div>
      <div className="buttonContainer">
        <div className="each">
          <div
            onClick={() => setIsSelf(false)}
            className={isSelf ? "buttonCard" : "buttonCard active"}
          >
            <span>씨퍼 측정</span>
            <span>서비스 이용</span>
          </div>
          <span
            style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}
          >
            핏에 민감한 분
          </span>
          <span style={{ fontSize: "14px", fontWeight: "300" }}>
            훨씬 정확해요.
          </span>
        </div>
        <div className="each">
          <div
            onClick={() => setIsSelf(true)}
            className={isSelf ? "buttonCard active" : "buttonCard"}
          >
            <span>셀프 등록</span>
          </div>
          <span
            style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}
          >
            핏에 민감하지 않은 분
          </span>
          <span style={{ fontSize: "14px", fontWeight: "300" }}>
            덜 정확해요.
          </span>
        </div>
      </div>
      <div className="item2">
        <span
          style={{ fontSize: "14px", fontWeight: "300", marginBottom: "16px" }}
        >
          어떤 서비스인지 볼래요!
        </span>
        <CircularButton
          width={160}
          onClick={() =>
            navigate(`${isSelf ? "/selfregistration" : "/measure"}`)
          }
        >
          서비스 체험
        </CircularButton>
      </div>
    </Container>
  );
};

export default MySizeIndex;
