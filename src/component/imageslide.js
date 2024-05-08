import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../functions/images";

const ImagesSlide = ({ openModal }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div style={{ maxWidth: "450px", maxHeight: "auto", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={image} onClick={() => openModal(index)}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={image}
              alt={index}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImagesSlide;
