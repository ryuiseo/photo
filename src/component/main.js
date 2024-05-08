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
      <MainImage src="/메인3수정.webp" />
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
          각자 다른 길을 걸어온 저희가
          <br /> 부부의 연으로 한 길을 걸어가고자 합니다.
          <br /> 한곳을 바라보며 첫 발을 떼는
          <br /> 그 시작의 자리에 함께해 주시기 바랍니다.
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
        <MainText>
          정영석 · 한경림<NameText> 의 차남 </NameText> 지수
        </MainText>
        <MainText isnormal="true">
          김석구 · 김성숙<NameText> 의 장녀 </NameText> 소연
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
        <CalendarImage src="/달력수정.png" />
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
                src={"/kakaomap_basic.png"}
                alt="kakao"
                onClick={() =>
                  window.open("https://place.map.kakao.com/m/78910847")
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
                src={"/naver_logo.webp"}
                alt="naver"
                onClick={() =>
                  window.open(
                    "https://map.naver.com/p/entry/place/1311070519?c=15.00,0,0,0,dh"
                  )
                }
              />
            </div>
            <p style={{ fontSize: "0.8rem" }}>네이버지도</p>
          </div>
        </div>

        <MainText istext="true">
          지하철 : 수원시청역(수인분당) 2번 출구에서 도보 약 3분 소요
          <br />
          주차장이 협소하오니 대중교통 이용해주시면 감사드리겠습니다.
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
                기업은행 | 378-014420-01-017{" "}
                <AccountCopyButton
                  text={"378-014420-01-017"}
                ></AccountCopyButton>{" "}
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
                <AccountCopyButton
                  text={"104943-02-045355"}
                ></AccountCopyButton>
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
                <AccountCopyButton
                  text={"228002-04-123994"}
                ></AccountCopyButton>
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
                <AccountCopyButton
                  text={"172602-04-039718"}
                ></AccountCopyButton>{" "}
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
      </motion.div>
      <BottomBox>
        <CopyLink text={"https://jisoosoyeon.netlify.app/"} />
      </BottomBox>
    </MainContainer>
  );
};

export default Main;
