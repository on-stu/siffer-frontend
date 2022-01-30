import React from "react";
import styled from "styled-components";
import CircularButton from "../../components/CircularButton";
import SmallBanner from "../../components/SmallBanner";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import HorizantalCard from "./HorizontalCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 100vh;
    background-image: url("images/unsplash/2.jpg");
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-color: #0f0f0f;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .banner__item {
    height: 50%;
    box-sizing: border-box;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    max-width: 1024px;
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
    white-space: nowrap;
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
    margin-top: 40px;
    margin-bottom: 160px;
  }
  .con {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media all and (min-width: 768px) {
    .banner {
      background-size: 60%;
      background-position: right center;
    }
  }
`;

const SelfRegistration = () => {
  const { width, height } = useWindowDimensions();
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
      <div className="con">
        <div className="content">
          <span className="title">이런 분께 추천해요.</span>
          <div className="cards">
            <HorizantalCard
              title="지금 당장 쇼핑이 급한 분"
              tags="# 긴급쇼핑"
              imageUrl="images/unsplash2/5.png"
            />
            <HorizantalCard
              title="비대면 서비스를 선호하시는 분"
              tags="# 언택트"
              imageUrl="images/unsplash2/1.png"
            />
            <HorizantalCard
              title="핏에 민감하지 않은 분"
              tags="# 맞기만 하면 장땡"
              imageUrl="images/unsplash2/6.png"
            />
          </div>
          <span className="title">서비스 이용방법</span>
          <div className="banners">
            <SmallBanner icon="finger" title="하단의 '입력' 버튼 클릭 !" />
            <SmallBanner
              icon="ruler"
              title="가이드를 따라 치수 측정 후 입력하기"
            />
            <SmallBanner icon="keyboard" title="측정한 치수 입력" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SelfRegistration;
