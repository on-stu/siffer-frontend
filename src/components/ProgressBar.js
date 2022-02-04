import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  .text {
    margin-top: 4px;
    color: white;
    margin-bottom: 4px;
  }
  .back {
    width: 100%;
    height: 20px;
    display: flex;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: #e5e5e5;
  }
  .bar {
    width: ${(props) => props.width};
    height: 100%;
    background-color: #02cb77;
    border-radius: 20px;
    transition: 600ms ease-in-out;
  }
  @media all and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    .text {
      margin-top: 0;
    }
  }
`;

const ProgressBar = ({ total, current }) => {
  return (
    <Container width={`${(current / total) * 100}%`}>
      <div className="back">
        <div className="bar"></div>
      </div>
      <div className="text">
        {current} / {total}
      </div>
    </Container>
  );
};

export default ProgressBar;
