import styled, { css } from "styled-components";

export const MainContainer = styled.section`
  margin: 0 auto;
`;
export const MainImage = styled.div`
  width: 480px;
  height: 600px;
  background-color: black;
`;

export const MainText = styled.p`
  text-align: center;
  margin-top: 8rem;
  line-height: 3rem;
  ${(props) =>
    props.isnormal === "true" &&
    css`
      margin-top: -1rem;
    `};
  ${(props) =>
    props.issub === "true" &&
    css`
      color: #9a9a9a;
      margin-top: -2rem;
    `};
`;

export const NameText = styled.span`
  color: #9a9a9a;
`;

export const CallButton = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3rem;
  cursor: pointer;
`;
