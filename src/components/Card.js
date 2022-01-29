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
  padding: 20px;
  outline: none;
  color: white;
  background-image: ${(props) => props.imageUrl && `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
