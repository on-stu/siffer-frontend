import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CircularButton from "../components/CircularButton";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import Logo from "../images/Logo.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    height: 80vh;
    display: flex;
    position: relative;
    background-image: url("images/unsplash/7.jpg");
    background-position: center center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .top {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .bottom {
    height: 50%;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding: 20px;
    box-sizing: border-box;
  }
  .sentence {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    white-space: nowrap;
  }
  .img {
    width: 160px;
  }
  .aboutContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .About {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    max-width: 800px;
  }

  .About__title {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
  }

  .About__content {
    display: flex;
    flex-direction: column;

    margin-bottom: 80px;
  }

  .About__content > p {
    margin-bottom: 20px;
  }

  .sifferLogo {
    background-image: url("images/LandingPage/2.png");
    width: 100%;
    height: 240px;
    background-size: contain;
    background-position: center center;
    background-color: #e82249;
    background-repeat: no-repeat;
  }
  .buttonContainer {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .subtitle {
    font-size: 22px;
    font-weight: 500;
  }
  @media all and (min-width: 768px) {
    .banner {
      background-position: 0px -500px;
    }
    .title {
      font-size: 52px;
      font-weight: 700;
    }
    .subtitle {
      font-size: 28px;
    }
    .About__content > p {
      font-size: 20px;
      font-weight: 400;
    }
    .sifferLogo {
      height: 400px;
      background-size: contain;
      background-position: center center;
      background-color: #e82249;
      background-repeat: no-repeat;
    }
  }
`;

const AboutPage = () => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  return (
    <Container>
      <div className="banner">
        <div className="top">
          <img src={Logo} className="img" />
        </div>
        <div className="bottom">
          <span>No matter who</span>
          <span>you are,</span>
          <span>you deserve to happy</span>
          <span>shopping online.</span>
        </div>
        <span className="sentence">
          {width > 768
            ? `
          We offer ‘Size Search Engine’ to find best fit for you. We show you
          fit prediction, You just pick. Start happy shopping with SIFFER.
          Welcome !
          `
            : `We offer ‘Size Search Engine’ to find best fit for you.`}
        </span>
      </div>
      <div className="aboutContainer">
        <div className="About">
          <div className="About__title">
            <span className="title">About</span>
            <span className="subtitle" style={{ marginTop: "10px" }}>
              온라인 사이즈 솔루션
            </span>
            <span className="subtitle">공급 컴퍼니 싸이퍼입니다.</span>
          </div>
          <div className="About__content" style={{ marginTop: "32px" }}>
            <p>
              싸이퍼는 특이한 체형 때문에 {width < 768 && <br />} 온라인 쇼핑 시
              사이즈 실패가 잦았던
              <br /> 경험을 가진 멤버들이 모여 결성한 팀입니다.
            </p>
            <p>
              특정 신체 부위나 체형 고민이 있더라도,
              {width < 768 && <br />} 온라인 쇼핑의 편리함을 누리고 싶긴
              {width < 768 && <br />}마찬가지죠. {width > 768 && <br />}
              우리는 온라인 쇼핑 특성상 {width < 768 && <br />}직접 입어보지
              못해 발생하는
              {width > 768 && <br />}
              사이즈 {width < 768 && <br />} 실패에 대한 두려움을 감소시키고자
              합니다.
            </p>
            <p>
              <b>특유의 대담하고 활기찬 액션</b>으로 <br />
              이용자의 신체치수를 기반해 {width < 768 && <br />}
              더욱 정확한 사이즈 선택을 돕습니다. <br />
              우리는 누구든 온라인 쇼핑이 즐거워야한다는 {width < 768 && <br />}
              비전과 가치를 공유합니다.
            </p>
          </div>
        </div>
        <div className="sifferLogo"></div>
        <div className="About">
          <div className="About__title">
            <span className="title">Our Service</span>
            <span className="subtitle" style={{ marginTop: "10px" }}>
              사이즈 검색 엔진 씨퍼,
            </span>
            <span className="subtitle">원하는 핏의 사이즈를</span>
            <span className="subtitle">3초만에 찾아보세요.</span>
          </div>
          <div className="About__content" style={{ marginTop: "32px" }}>
            <p>
              싸이퍼가 제공하는 서비스 씨퍼는
              {width < 768 && <br />}
              {` `}
              하체가 발달한 데에 비해 허리가 빈약하여
              <br />
              청바지는 오프라인으로만 구매해야 했던
              {width < 768 && <br />}
              불편함에서 시작되었습니다.
            </p>
            <p>
              이제 청바지도 씨퍼와 함께라면
              {width < 768 && <br />}
              온라인으로 맘 편히 구매할 수 있습니다. <br />
              구매하고 싶은 제품이 내 몸에 맞는지 {width < 768 && <br />}
              단, 3초만에 확인해보세요.
            </p>
            <p>
              개인마다 선호하는 핏이 다르기에, {width < 768 && <br />}
              사이즈 추천은 하지 않습니다.
              <br />
              다만, 주체적으로 결정할 수 있도록 {width < 768 && <br />}
              열정적으로 안내할게요.
            </p>
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            그럼, 우리
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            즐거움 가득한 쇼핑환경으로
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            함께 떠나볼래요?
          </span>
        </div>
      </div>
      <div className="buttonContainer">
        <CircularButton width={140} height={47} onClick={() => navigate("/")}>
          Yes!
        </CircularButton>
      </div>
    </Container>
  );
};

export default AboutPage;
