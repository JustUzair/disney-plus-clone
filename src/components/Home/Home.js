import React from "react";
import styled from "styled-components";
import Viewers from "../Viewers/Viewers";
import ImgSlider from "../ImageSlider/ImgSlider";
import bgImg from "../../images/home-background.png";
function Home() {
  return (
    <HomeWrapper>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
    </HomeWrapper>
  );
}
export default Home;
const HomeWrapper = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url(${bgImg}) center center / cover no-repeat fixed;
  }
`;
