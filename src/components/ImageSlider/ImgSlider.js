import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import img1 from "../../images/slider-badging.jpg";
import img2 from "../../images/slider-badag.jpg";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <CarouselContainer>
        <img src={img1} alt="Slider image 1" />
      </CarouselContainer>
      <CarouselContainer>
        <img src={img2} alt="Slider image 1" />
      </CarouselContainer>
    </Carousel>
  );
}

export default ImgSlider;
const Carousel = styled(Slider)`
  margin: 0px 10px 0px 10px;
  padding-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
  li.slick-active button:before {
    color: white;
  }
  @media (max-width: 768px) {
    margin: 0px 20px 0px 20px;
  }
`;
const CarouselContainer = styled.div`
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      height: 20vh;
      object-fit: cover;
    }
    @media (max-width: 350px) {
      height: 15vh;
      object-fit: cover;
    }
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
