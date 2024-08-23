import {
  NavermapsProvider,
  NaverMap,
  Container as MapDiv,
  Marker,
} from "react-naver-maps";
import { useEffect } from "react";
import CopyTextButton from "../functions/copybutton";
import CopyAccountButton from "../functions/copyaccount";
import { useState } from "react";
import DDayCounter from "../functions/dday";
import ImagesSlide from "./imageslide";
import { images } from "../functions/images";
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
  AccordionContainer,
  AccordionButton,
  AccordionContent,
  BottomBox,
  AccountBox,
} from "./styles";
import CopyLinkButton from "../functions/copylink";
import CancelIcon from "@mui/icons-material/Cancel";
import { motion } from "framer-motion";

const Main = () => {
  const navermaps = window.naver.maps;
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (clickedIndex) => {
    setCurrentImageIndex(clickedIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const Modal = ({ isopen, onClose, openModal, currentImageIndex }) => {
    if (!isopen) return null;
    return (
      <ModalContainer>
        <ModalContent>
          <ImagesSlide
            openModal={openModal}
            currentImageIndex={currentImageIndex}
          />
          <CancelIcon
            onClick={onClose}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "3%",
              left: "85%",
            }}
          >
            닫기
          </CancelIcon>
        </ModalContent>
      </ModalContainer>
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
  const CopyLink = ({ text }) => {
    return <CopyLinkButton text={text} />;
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
      <MainImage src="./rsw1.png" />
      <MainText>
        설레는 마음으로 처음 서로의 손을
        <br /> 잡았던 때가 기억납니다.
        <br /> 함께하는 시간 동안 더 깊어진 마음으로
        <br /> 다시 한번 서로의 손을 더 단단히 잡으려 합니다.
        <br /> 저희의 아름다운 시작에
        <br /> 소중한 축복으로 함께해 주시기 바랍니다.
      </MainText>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <MainText>
          심상곤 · 조분선<NameText> 의 장남 </NameText> 찬섭
        </MainText>
        <MainText isnormal="true">
          류연하 · 오승희<NameText> 의 장녀 </NameText> 선우
        </MainText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <CalendarImage src="./calendar.png" />
        <DdayText>
          <DDayCounter />
        </DdayText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <MainText>오시는 길</MainText>
        <MainText isnormal="true">파티웨딩유 2층 아모르홀</MainText>
        <TextWithCopyButton
          text={"경기도 수원시 권선구 세화로 218"}
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
              defaultCenter={{ lat: 37.2716756, lng: 126.9953294 }} // 지도 초기 위치
              defaultZoom={17} // 지도 초기 확대 배율
            >
              <Marker
                key={1}
                position={new navermaps.LatLng(37.2716756, 126.9953294)}
              />
            </NaverMap>
          </MapDiv>
        </NavermapsProvider>
        <div
          style={{
            display: "flex",
            width: "10rem",
            margin: "2rem auto",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "block",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src={"./kakaomap_basic.png"}
                alt="kakao"
                onClick={() =>
                  window.open("https://place.map.kakao.com/m/18152810")
                }
              />
            </div>
            <p style={{ fontSize: "0.8rem" }}>카카오맵</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src={"./naver_logo.webp"}
                alt="naver"
                onClick={() =>
                  window.open(
                    "https://map.naver.com/p/entry/place/13103771?c=15.00,0,0,0,dh"
                  )
                }
              />
            </div>
            <p style={{ fontSize: "0.8rem" }}>네이버지도</p>
          </div>
        </div>
        <MainText istext="true">
          <p style={{ fontSize: "1rem" }}>찾아오시는길</p>
          <span style={{ color: "hotpink" }}> 자가용 이용시</span>
          <br />
          네비게이션에 파티웨딩유 검색
          <br />
          <span style={{ color: "hotpink" }}> 지하철 이용시</span>
          <br />
          1호선, 수인분당선 수원역하차
          <br />
          <span style={{ color: "hotpink" }}> 셔틀버스 이용시</span>
          <br />
          수원역 지하상가 13번 출구방향 리무진 버스정류장
        </MainText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <MainText>갤러리</MainText>
      </motion.div>
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
          isopen={modalOpen}
          onClose={closeModal}
          openModal={openModal}
          currentImageIndex={currentImageIndex}
        />
      </div>
      <MainText istext="true">
        이미지를 클릭하시면 확대보기가 가능합니다.
      </MainText>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
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
                국민은행 | 210-21–0524-872
                <AccountCopyButton
                  text={"210-21–0524-872"}
                ></AccountCopyButton>{" "}
              </div>
              <div>심상곤</div>
            </AccountBox>
            <AccountBox>
              <div
                style={{
                  display: "flex",
                }}
              >
                우리은행 | 1002-143-794205
                <AccountCopyButton text={"1002-143-794205"}></AccountCopyButton>
              </div>
              <div>심찬섭</div>
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
                기업은행 | 345-090069-01-015{" "}
                <AccountCopyButton
                  text={"345-090069-01-015"}
                ></AccountCopyButton>{" "}
              </div>
              <div>류연하</div>
            </AccountBox>
            <AccountBox>
              <div
                style={{
                  display: "flex",
                }}
              >
                기업은행 | 503-052602-01-013
                <AccountCopyButton text={"503-052602-01-013"} />
              </div>
              <div>류선우</div>
            </AccountBox>
          </AccordionContent>
        </AccordionContainer>
      </motion.div>
      <BottomBox>
        <CopyLink text={"https://ryuiseo.github.io/inviteCard2/"} />
      </BottomBox>
    </MainContainer>
  );
};

export default Main;
