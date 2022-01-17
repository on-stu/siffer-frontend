import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background-origin: border-box;
  border: 16px solid transparent;

  outline: none;
  color: white;
  background-image: ${(props) => props.imageUrl && `url(${props.imageUrl})`};
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: auto;

  .title {
    font-size: 24px;
    font-weight: 700;
  }

  .subTitle {
    font-size: 16px;
    font-weight: 500;
  }
  .tags {
    font-size: 14px;
    font-weight: 300;
  }
`;

const Card = ({ title, title2, subTitle, tags, imageUrl }) => {
  return (
    <Container imageUrl={imageUrl}>
      <span className="title">{title}</span>
      {title2 && <span className="title">{title2}</span>}
      <span className="subTitle">{subTitle}</span>
      <span className="tags">{tags}</span>
    </Container>
  );
};

export default Card;
