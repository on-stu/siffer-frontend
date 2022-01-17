import React from "react";
import styled from "styled-components";
import CircularButton from "../components/CircularButton";
import Logo from "../images/Logo.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    height: 80vh;
    display: flex;
    position: relative;
    background-image: url("images/LandingPage/1.png");
    background-position: center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .top {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .bottom {
    height: 60%;
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
  .img {
    width: 160px;
  }

  .About {
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
  }

  .About__title {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
  }

  .About__content {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 80px;
  }

  .sifferLogo {
    background-image: url("images/LandingPage/2.png");
    width: 100%;
    height: 240px;
    background-size: cover;
    background-position: center center;
  }
  .buttonContainer {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LandingPage = () => {
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
      </div>
      <div className="About">
        <div className="About__title">
          <span style={{ fontSize: "28px", fontWeight: "bold" }}>About</span>
          <span
            style={{ marginTop: "10px", fontSize: "22px", fontWeight: "500" }}
          >
            온라인 사이즈 솔루션
          </span>
          <span style={{ fontSize: "22px", fontWeight: "500" }}>
            공급 컴퍼니 싸이퍼입니다.
          </span>
        </div>
        <div className="About__content" style={{ marginTop: "32px" }}>
          <p>
            싸이퍼는 특이한 체형 때문에 <br /> 온라인 쇼핑 시 사이즈 실패가
            잦았던
            <br /> 경험을 가진 멤버들이 모여 결성한 팀입니다.
          </p>
          <p>
            특정 신체 부위나 체형 고민이 있더라도,
            <br /> 온라인 쇼핑의 편리함을 누리고 싶긴
            <br /> 마찬가지죠. 우리는 온라인 쇼핑 특성상
            <br /> 직접 입어보지 못해 발생하는 사이즈
            <br /> 실패에 대한 두려움을 감소시키고자 합니다.
          </p>
          <p>
            특유의 대담하고 활기찬 액션으로 <br />
            이용자의 신체치수를 기반해 <br />
            더욱 정확한 사이즈 선택을 돕습니다. <br />
            우리는 누구든 온라인 쇼핑이 즐거워야한다는 <br />
            비전과 가치를 공유합니다.
          </p>
        </div>
      </div>
      <div className="sifferLogo"></div>
      <div className="About">
        <div className="About__title">
          <span style={{ fontSize: "28px", fontWeight: "bold" }}>
            Our Service
          </span>
          <span
            style={{ marginTop: "10px", fontSize: "22px", fontWeight: "500" }}
          >
            사이즈 검색 엔진 씨퍼,
          </span>
          <span style={{ fontSize: "22px", fontWeight: "500" }}>
            원하는 핏의 사이즈를
          </span>
          <span style={{ fontSize: "22px", fontWeight: "500" }}>
            3초만에 찾아보세요.
          </span>
        </div>
        <div className="About__content" style={{ marginTop: "32px" }}>
          <p>
            싸이퍼가 제공하는 서비스 씨퍼는
            <br />
            하체가 발달한 데에 비해 허리가 빈약하여
            <br />
            청바지는 오프라인으로만 구매해야 했던
            <br />
            불편함에서 시작되었습니다.
          </p>
          <p>
            이제 청바지도 씨퍼와 함께라면
            <br />
            온라인으로 맘 편히 구매할 수 있습니다. <br />
            구매하고 싶은 제품이 내 몸에 맞는지 <br />
            단, 3초만에 확인해보세요.
          </p>
          <p>
            개인마다 선호하는 핏이 다르기에, <br />
            사이즈 추천은 하지 않습니다.
            <br />
            다만, 주체적으로 결정할 수 있도록 <br />
            열정적으로 안내할게요.
          </p>
        </div>
        <span
          style={{ fontSize: "22px", fontWeight: "500", marginBottom: "10px" }}
        >
          그럼, 우리
        </span>
        <span
          style={{ fontSize: "22px", fontWeight: "500", marginBottom: "10px" }}
        >
          즐거움 가득한 쇼핑환경으로
        </span>
        <span
          style={{ fontSize: "22px", fontWeight: "500", marginBottom: "10px" }}
        >
          함께 떠나볼래요?
        </span>
      </div>
      <div className="buttonContainer">
        <CircularButton width={140} height={47}>
          Yes!
        </CircularButton>
      </div>
    </Container>
  );
};

export default LandingPage;
