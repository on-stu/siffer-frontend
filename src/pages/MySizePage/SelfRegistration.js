import React from "react";
import styled from "styled-components";
import CircularButton from "../../components/CircularButton";
import SmallBanner from "../../components/SmallBanner";
import HorizantalCard from "./HorizontalCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 100vh;
    background-image: url("images/MeasureService/6.png");
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
  .content {
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
  }
  .title {
    margin-top: 80px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .subTitle {
  }
  .cards {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    overflow-wrap: nowrap;
    column-gap: 20px;
    white-space: nowrap;
    height: 200px;
  }
  p {
    margin-top: 10px;
    font-weight: 300;
    padding-right: 20px;
  }
  .imgBox {
    padding-right: 20px;
    margin-top: 40px;
    margin-bottom: 80px;
  }
  .banners {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    row-gap: 10px;
    margin-top: 40px;
    margin-bottom: 160px;
  }
`;

const SelfRegistration = () => {
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
            Self registeration
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            줄이고 또 줄였습니다.
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            진짜 필요한 항목들로만.
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            5분 투자의 신세계를 경험하세요.
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
            지금 바로 입력
          </CircularButton>
        </div>
      </div>
      <div className="content">
        <span className="title">이런 분께 추천해요.</span>
        <div className="cards">
          <HorizantalCard
            title="지금 당장 쇼핑이 급한 분"
            tags="# 긴급쇼핑"
            imageUrl="images/MeasureService/7.png"
          />
          <HorizantalCard
            title="비대면 서비스를 선호하시는 분"
            tags="# 언택트"
            imageUrl="images/MeasureService/8.png"
          />
        </div>
        <span className="title">서비스 이용방법</span>
        <div className="banners">
          <SmallBanner icon="finger" title="하단의 '입력' 버튼 클릭 !" />
          <SmallBanner
            icon="ruler"
            title="가이드를 따라 치수 측정 후 입력하기"
          />
        </div>
      </div>
    </Container>
  );
};

export default SelfRegistration;
