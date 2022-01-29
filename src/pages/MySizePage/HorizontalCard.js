import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 190px;
  height: 160px;
  border-radius: 10px;
  min-width: 190px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background-origin: border-box;
  border: 10px solid transparent;
  outline: none;
  color: white;
  background-image: ${(props) => props.imageUrl && `url(${props.imageUrl})`};
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  margin-right: 20px;
  .title2 {
    font-size: 17px;
    font-weight: 700;
  }

  .tags {
    font-size: 14px;
    font-weight: 300;
  }
  @media all and (min-width: 768px) {
    width: 300px;
    height: 260px;
  }
`;

const HorizantalCard = ({ title, tags, imageUrl }) => {
  return (
    <Container imageUrl={imageUrl}>
      <span className="title2">{title}</span>
      <span className="tags">{tags}</span>
    </Container>
  );
};

export default HorizantalCard;
