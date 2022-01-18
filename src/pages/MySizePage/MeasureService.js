import React from "react";
import styled from "styled-components";
import CircularButton from "../../components/CircularButton";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 100vh;
    background-image: url("images/MeasureService/5.png");
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .banner__item {
    height: 50%;
    box-sizing: border-box;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
  }
`;

const MeasureService = () => {
  return (
    <Container>
      <div className="banner">
        <div className="banner__item"></div>
        <div className="banner__item">
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>
            신체치수 측정 서비스
          </span>
          <span style={{ fontWeight: "bold", fontSize: "28px" }}>
            Body size
          </span>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "28px",
              marginBottom: "24px",
            }}
          >
            Measurement service
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            원하시는 장소로 달려갑니다.
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            단 한번의 측정으로 사이즈 고민없는
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            온라인 쇼핑을 시작하세요.
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            bottom: "32px",
          }}
        >
          <CircularButton width={320} white={true}>
            지금 바로 예약
          </CircularButton>
        </div>
      </div>
    </Container>
  );
};

export default MeasureService;
