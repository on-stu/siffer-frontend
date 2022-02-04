import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "../../components/ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import Top from "../../components/Top";

const MeasureServiceIndex = () => {
  const [current, setCurrent] = useState(1);
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      {width < 768 && (
        <Top setCurrent={setCurrent} title="서비스 예약" backButton={true} />
      )}
      <ProgressBar total={3} current={current} />
      <div className="innerContainer">
        {width > 768 && (
          <Top setCurrent={setCurrent} backButton={false} title="서비스 예약" />
        )}
        {current === 1 ? (
          <Step1 setCurrent={setCurrent} />
        ) : (
          <Step2 setCurrent={setCurrent} />
        )}
      </div>
    </Container>
  );
};

export default MeasureServiceIndex;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contents {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: white;
    padding: 20px;
  }
  .buttons {
    margin-top: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
  }
  .innerContainer {
    width: 100%;
    max-width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
`;
