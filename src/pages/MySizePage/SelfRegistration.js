import React from "react";
import styled from "styled-components";
import CircularButton from "../../components/CircularButton";
import SmallBanner from "../../components/SmallBanner";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import HorizantalCard from "./HorizontalCard";
import Hand1 from "../../icons/hand.svg";
import Hand2 from "../../icons/hand2.svg";

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
  .guide {
    display: flex;
    flex-direction: row;
    text-decoration: underline;
    align-items: flex-end;
    font-weight: 600;
    font-size: 18px;
    margin-top: 20px;
  }
  .guide > span {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media all and (min-width: 768px) {
    .banner {
      background-size: 60%;
      background-position: right center;
    }
    .guide > span {
      cursor: pointer;
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
            ???????????? ?????? ?????????
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
            ????????? ??? ???????????????.
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            ?????? ????????? ???????????????.
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            5??? ????????? ???????????? ???????????????.
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
            ?????? ?????? ??????
          </CircularButton>
        </div>
      </div>
      <div className="con">
        <div className="content">
          <span className="title">?????? ?????? ????????????.</span>
          <div className="cards">
            <HorizantalCard
              title="?????? ?????? ????????? ?????? ???"
              tags="# ????????????"
              imageUrl="images/unsplash2/5.png"
            />
            <HorizantalCard
              title="????????? ???????????? ??????????????? ???"
              tags="# ?????????"
              imageUrl="images/unsplash2/1.png"
            />
            <HorizantalCard
              title="?????? ???????????? ?????? ???"
              tags="# ????????? ?????? ??????"
              imageUrl="images/unsplash2/6.png"
            />
          </div>
          <span className="title">????????? ????????????</span>
          <div className="banners">
            <SmallBanner icon="finger" title="????????? '??????' ?????? ?????? !" />
            <SmallBanner
              icon="ruler"
              title="???????????? ?????? ?????? ?????? ??? ????????????"
            />
            <SmallBanner icon="keyboard" title="????????? ?????? ??????" />
            <div className="guide">
              <img src={Hand1} width={32} />
              <span>?????? ?????? ?????????</span>
              <img src={Hand2} width={32} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SelfRegistration;
