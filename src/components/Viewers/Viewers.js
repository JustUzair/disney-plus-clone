import React, { useState } from "react";
import styled from "styled-components";
import viewerDisney from "../../images/viewers-disney.png";
import viewerPixar from "../../images/viewers-pixar.png";
import viewerMarvel from "../../images/viewers-marvel.png";
import viewerStarwars from "../../images/viewers-starwars.png";
import viewerNational from "../../images/viewers-national.png";
import videoDisney from "../../videos/disney.mp4";
import videoPixar from "../../videos/pixar.mp4";
import videoMarvel from "../../videos/marvel.mp4";
import videoStarwars from "../../videos/starwars.mp4";
import videoNational from "../../videos/national-geographic.mp4";
function Viewers() {
  let [disney, setDisney] = useState(false);
  let [pixar, setPixar] = useState(false);
  let [marvel, setMarvel] = useState(false);
  let [starwars, setStarWars] = useState(false);
  let [national, setNational] = useState(false);
  return (
    <ViewerWrapper>
      <ViewerContent
        onMouseEnter={e => {
          setDisney(true);
        }}
        onMouseLeave={e => {
          setDisney(false);
        }}
      >
        {!disney ? (
          <img src={viewerDisney} alt="Disney" />
        ) : (
          <video
            preload="auto"
            className="viewer disney"
            src={videoDisney}
            loop
            autoPlay
          ></video>
        )}
      </ViewerContent>
      <ViewerContent
        onMouseEnter={() => {
          setPixar(true);
        }}
        onMouseLeave={() => {
          setPixar(false);
        }}
      >
        {!pixar ? (
          <img src={viewerPixar} alt="Pixar" />
        ) : (
          <video
            preload="auto"
            className="viewer"
            src={videoPixar}
            loop
            autoPlay
          ></video>
        )}
      </ViewerContent>
      <ViewerContent
        onMouseEnter={() => {
          setMarvel(true);
        }}
        onMouseLeave={() => {
          setMarvel(false);
        }}
      >
        {!marvel ? (
          <img src={viewerMarvel} alt="Marvel" />
        ) : (
          <video
            preload="auto"
            className="viewer"
            src={videoMarvel}
            loop
            autoPlay
          ></video>
        )}
      </ViewerContent>
      <ViewerContent
        onMouseEnter={() => {
          setStarWars(true);
        }}
        onMouseLeave={() => {
          setStarWars(false);
        }}
      >
        {!starwars ? (
          <img src={viewerStarwars} alt="Starwars" />
        ) : (
          <video
            preload="auto"
            className="viewer"
            src={videoStarwars}
            loop
            autoPlay
          ></video>
        )}
      </ViewerContent>
      <ViewerContent
        onMouseEnter={() => {
          setNational(true);
        }}
        onMouseLeave={() => {
          setNational(false);
        }}
      >
        {!national ? (
          <img src={viewerNational} alt="National" />
        ) : (
          <video
            preload="auto"
            className="viewer"
            src={videoNational}
            loop
            autoPlay
          ></video>
        )}
      </ViewerContent>
    </ViewerWrapper>
  );
}
const ViewerWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-column-gap: 25px;
  padding: 30px 0px 26px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 10px;
    align-items: center;
    justify-items: center !important;
  }
  @media (max-width: 500px) {
    /* grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); */
    grid-row-gap: 20px;
  }
  width: 100%;
`;
const ViewerContent = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
    height: calc(100% - 5px);
    height: 100%;
    border-color: rgba(249, 249, 249, 0.8);
  }
  @media (max-width: 768px) {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 7px;
  }
`;
export default Viewers;
