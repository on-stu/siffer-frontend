import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const ResultPage = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (percent !== 100) {
        setPercent(percent + 1);
      }
      console.log(percent);
    }, 10);
    return () => clearInterval(timer);
  }, [percent]);
  return (
    <Container>
      <Loading percent={percent} />
    </Container>
  );
};

export default ResultPage;
