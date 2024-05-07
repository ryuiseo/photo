import {
  NavermapsProvider,
  NaverMap,
  Container as MapDiv,
  Marker,
} from "react-naver-maps";
import CopyTextButton from "../functions/copybutton";
import CopyAccountButton from "../functions/copyaccount";
import { useState } from "react";
import DDayCounter from "../functions/dday";
import {
  MainContainer,
  MainImage,
  MainText,
  NameText,
  CalendarImage,
  DdayText,
  Grid,
  Image,
  ModalContainer,
  ModalContent,
  ModalImage,
  AccordionContainer,
  AccordionButton,
  AccordionContent,
  BottomBox,
  AccountBox,
} from "./styles";

const Main = () => {
  const navermaps = window.naver.maps;
  const images = [
    "/01.jpg",
    "/02.jpg",
    "/03.jpg",
    "/04.jpg",
    "/05.jpg",
    "/06.jpg",
    "/07.jpg",
    "/08.jpg",
    "/09.jpg",
    "/10.jpg",
    "/11.jpeg",
    "/12.jpeg",
    "/13.jpeg",
    "/14.jpeg",
    "/15.jpeg",
    "/16.jpeg",
    "/17.jpeg",
    "/18.jpeg",
    "/19.jpeg",
    "/20.jpeg",
    "/21.jpeg",
    "/22.jpeg",
    "/23.jpeg",
    "/24.jpeg",
    // 추가 이미지 경로 추가 가능
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const Modal = ({ isOpen, image, onClose, onPrev, onNext }) => {
    if (!isOpen) return null;
    return (
      <ModalContainer>
        <ModalContent>
          <ModalImage src={image} alt="modal" />
          <button onClick={onPrev}>이전</button>
          <button onClick={onNext}>다음</button>
          <button onClick={onClose}>닫기</button>
        </ModalContent>
      </ModalContainer>
    );
  };
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const TextWithCopyButton = ({ text }) => {
    return (
      <MainText issub="true">
        <span>{text}</span>
        <CopyTextButton text={text} />
      </MainText>
    );
  };
  const AccountCopyButton = ({ text }) => {
    return <CopyAccountButton text={text} />;
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <MainContainer>
      <MainImage src="/메인3수정.png" />
      <MainText>
        각자 다른 길을 걸어온 저희가
        <br /> 부부의 연으로 한 길을 걸어가고자 합니다.
        <br /> 한곳을 바라보며 첫 발을 떼는
        <br /> 그 시작의 자리에 함께해 주시기 바랍니다.
      </MainText>
      <MainText>
        정영석 · 한경림<NameText> 의 차남 </NameText> 지수
      </MainText>
      <MainText isnormal="true">
        김석구 · 김성숙<NameText> 의 장녀 </NameText> 소연
      </MainText>
      <CalendarImage src="/달력수정.png" />
      <DdayText>
        <DDayCounter />
      </DdayText>
      <MainText>오시는 길</MainText>
      <MainText isnormal="true">
        이비스 앰버서더 수원 15층 베르사이유 홀
      </MainText>
      <TextWithCopyButton
        text={"경기도 수원시 팔달구 권광로 132"}
      ></TextWithCopyButton>
      <NavermapsProvider
        ncpClientId={"3gurptape5"}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <MapDiv
          onClick={() => {}} // html div event
          style={{
            width: "400px",
            height: "400px",
            margin: "0 auto",
          }}
        >
          <NaverMap
            defaultCenter={{ lat: 37.259311, lng: 127.03134 }} // 지도 초기 위치
            defaultZoom={17} // 지도 초기 확대 배율
          >
            <Marker
              key={1}
              position={new navermaps.LatLng(37.259311, 127.03134)}
            />
          </NaverMap>
        </MapDiv>
      </NavermapsProvider>
      <MainText>갤러리</MainText>
      <div>
        <Grid>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`image-${index}`}
              onClick={() => openModal(index)}
            />
          ))}
        </Grid>
        <Modal
          isOpen={modalOpen}
          image={images[currentImageIndex]}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      </div>
      <MainText>마음 전하실 곳</MainText>
      <AccordionContainer>
        <AccordionButton onClick={toggleAccordion}>
          신랑측 계좌번호
        </AccordionButton>
        <AccordionContent isOpen={isOpen}>
          <AccountBox>
            <div
              style={{
                display: "flex",
              }}
            >
              기업은행 | 378-014420-01-017{" "}
              <AccountCopyButton text={"378-014420-01-017"}></AccountCopyButton>{" "}
            </div>
            <div>정영석</div>
          </AccountBox>
          <AccountBox>
            <div
              style={{
                display: "flex",
              }}
            >
              우체국 | 104943-02-045355{" "}
              <AccountCopyButton text={"104943-02-045355"}></AccountCopyButton>
            </div>
            <div>한경림</div>
          </AccountBox>
          <AccountBox>
            <div
              style={{
                display: "flex",
              }}
            >
              국민은행 | 228002-04-123994{" "}
              <AccountCopyButton text={"228002-04-123994"}></AccountCopyButton>
            </div>
            <div>정지수</div>
          </AccountBox>
        </AccordionContent>
      </AccordionContainer>
      <AccordionContainer>
        <AccordionButton onClick={toggleAccordion2}>
          신부측 계좌번호
        </AccordionButton>
        <AccordionContent isOpen={isOpen2}>
          <AccountBox>
            <div
              style={{
                display: "flex",
              }}
            >
              국민은행 | 294-240-003-335{" "}
              <AccountCopyButton text={"294-240-003-335"}></AccountCopyButton>{" "}
            </div>
            <div>김석구</div>
          </AccountBox>
          <AccountBox>
            <div
              style={{
                display: "flex",
              }}
            >
              국민은행 | 172602-04-039718{" "}
              <AccountCopyButton text={"172602-04-039718"}></AccountCopyButton>{" "}
            </div>
            <div>김성숙</div>
          </AccountBox>
          <AccountBox>
            <div
              style={{
                display: "flex",
              }}
            >
              신한은행 | 110-412-389583
              <AccountCopyButton text={"110-412-389583"} />
            </div>

            <div>김소연</div>
          </AccountBox>
        </AccordionContent>
      </AccordionContainer>
      <BottomBox>
        <p style={{ cursor: "pointer" }}>링크주소 복사하기</p>
      </BottomBox>
    </MainContainer>
  );
};

export default Main;
