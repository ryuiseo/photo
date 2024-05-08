import styled, { css } from "styled-components";

export const MainContainer = styled.section`
  margin: 0 auto;
`;
export const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainText = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-size: 1rem;
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
  ${(props) =>
    props.istext === "true" &&
    css`
      margin-top: 2rem;
      font-size: 0.8rem;
    `};
  font-family: "Noto Serif KR";
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

export const CalendarImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

export const DdayText = styled.p`
  margin: 2rem auto;
  text-align: center;
  font-size: 1rem;
`;

// 그리드 스타일드 컴포넌트
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

// 이미지 스타일드 컴포넌트
export const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

// 모달 스타일드 컴포넌트
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: transparent;
  display: block;
  position: relative;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
`;

export const AccordionContainer = styled.div`
  width: 300px;
  margin: 20px auto;
  height: 100%;
`;

export const AccordionButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #e0d6ca;
  color: #505050;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-family: "Noto Serif KR";
`;
export const AccountBox = styled.div`
  background-color: white;
  height: 2rem;
  padding: 1rem;
  display: block;
  margin-bottom: 0.3rem;
`;
export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
`;

export const AccordionText = styled.p`
  font-size: 14px;
  margin: 10px 0;
  font-family: "Noto Serif KR";
`;

export const BottomBox = styled.div`
  margin-top: 6rem;
  background-color: #e0d6ca;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
