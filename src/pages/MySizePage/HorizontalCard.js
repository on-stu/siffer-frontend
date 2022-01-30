import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 190px;
  height: 160px;
  min-width: 190px;
  min-height: 160px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  outline: none;
  color: white;
  background-image: ${(props) => props.imageUrl && `url(${props.imageUrl})`};
  background-size: cover;
  background-position: ${(props) =>
    props.top ? `center top` : `center center`};

  background-repeat: no-repeat;
  position: relative;
  margin-right: 20px;
  .title2 {
    font-size: 17px;
    font-weight: 700;
    width: 100%;
    white-space: pre-wrap;
  }
  .tags {
    font-size: 14px;
    font-weight: 300;
    width: 100%;
  }
  .blank {
    background: transparent;
  }
  .gradient {
    background: linear-gradient(#00000000, #000000);
    width: 100%;
    position: absolute;
    height: 60%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
  @media all and (min-width: 768px) {
    width: 300px;
    height: 260px;
    .gradient {
      padding: 20px;
    }
  }
`;

const HorizantalCard = ({ title, tags, imageUrl, top }) => {
  return (
    <Container imageUrl={imageUrl} top={top}>
      <div className="blank"></div>
      <div className="gradient">
        <span className="title2">{title}</span>
        <span className="tags">{tags}</span>
      </div>
    </Container>
  );
};

export default HorizantalCard;
