import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 20px;
  border: 1px solid black;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  @media all and (min-width: 768px) {
    font-size: 16px;
  }
`;
