import React from "react";
import styled from "styled-components";
import { SearchInput } from "../components/SearchInput";
import { FiSearch } from "react-icons/fi";
import CircularButton from "../components/CircularButton";
import Card from "../components/Card";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .middle {
    font-size: 20px;
  }
  .bold {
    font-weight: 700;
    font-size: 28px;
  }
  .inputContainer {
    width: 85%;
    max-width: 645px;
    height: fit-content;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .icon {
    position: absolute;
    left: 10px;
    top: 12px;
  }
  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 100px;
    padding: 0;
  }
  .cardsContainer {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  @media all and (min-width: 768px) {
    .middle {
      font-size: 30px;
    }
    .bold {
      font-weight: 700;
      font-size: 60px;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 1024px;
    }
  }
`;

const SizeSearchPage = () => {
  return (
    <Container>
      <div className="banner">
        <span className="middle">단, 3초만에</span>
        <span className="middle">내 사이즈를 찾는 사이즈 검색 엔진</span>
        <span className="bold">Size Search Engine</span>
        <span className="inputContainer">
          <FiSearch className="icon" />
          <SearchInput placeholder="사이즈 비교하고 싶은 '제품링크' 복사붙여넣기" />
        </span>
        <span className="buttonContainer">
          <CircularButton width={120} height={40}>
            사이즈 비교
          </CircularButton>
        </span>
      </div>
      <div className="cardsContainer">
        <div className="cards">
          <Card
            title="원마일웨어도 나답게"
            subTitle="프리랜서의 주말"
            tags="# traning set-up #track pants"
            imageUrl="images/SizeSearchPage/5.png"
          />
          <Card
            title="'호랑이 에디션'"
            title2="액티브웨어 신상"
            subTitle="임인년을 맞이한 스포츠 브랜드 페션템"
            tags="# yellow #pattern #crop top"
            imageUrl="images/SizeSearchPage/2.png"
          />
          <Card
            title="내 몸은 물론 환경까지"
            title2="지켜주는 이너템"
            subTitle="친환경 소재의 감각적인 이너 티셔츠
            "
            tags="# environment  #trendy  # T-shirts"
            imageUrl="images/SizeSearchPage/3.png"
          />
          <Card
            title="추위에 맞설"
            title2="윈터 니트 초이스 팁"
            subTitle="체형, 소재, 디자인으로 가린 최종 우승템은?"
            tags="# winter knit #top ranking"
            imageUrl="images/SizeSearchPage/4.png"
          />
        </div>
      </div>
    </Container>
  );
};

export default SizeSearchPage;
