import { useEffect } from 'react';
import { useState } from 'react';
import ImagesSlide from './imageslide';
import { images } from '../functions/images';
import {
  MainContainer,
  MainText,
  Grid,
  Image,
  ModalContainer,
  ModalContent,
} from './styles';
import CancelIcon from '@mui/icons-material/Cancel';

const Main = () => {
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
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
              cursor: 'pointer',
              position: 'absolute',
              top: '3%',
              left: '85%',
            }}
          >
            닫기
          </CancelIcon>
        </ModalContent>
      </ModalContainer>
    );
  };

  return (
    <MainContainer>
      <MainText style={{ marginBottom: '5rem' }}>
        홍경표 | 류이서 <br />
        저희 두 사람이 결혼하게 되었습니다. <br />
        결혼식 없이 조용히 시작하게 된 점<br /> 너그러이 이해해주셔서 진심으로
        감사드립니다.
        <br /> 앞으로도 저희 두 사람의 앞날을
        <br /> 따듯하게 지켜봐주세요.
        <br />
      </MainText>
      <MainText>갤러리</MainText>
      <MainText istext="true">
        이미지를 클릭하시면 확대보기가 가능합니다.
      </MainText>
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
    </MainContainer>
  );
};

export default Main;
