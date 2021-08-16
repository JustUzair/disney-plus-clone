import React from "react";
import styled from "styled-components";
import viewerDisney from "../../images/viewers-disney.png";
import viewerPixar from "../../images/viewers-pixar.png";
import viewerMarvel from "../../images/viewers-marvel.png";
import viewerStarwars from "../../images/viewers-starwars.png";
import viewerNational from "../../images/viewers-national.png";
function Viewers() {
  return (
    <ViewerWrapper>
      <ViewerContent>
        <img src={viewerDisney} alt="Disney" />
      </ViewerContent>
      <ViewerContent>
        <img src={viewerPixar} alt="Pixar" />
      </ViewerContent>
      <ViewerContent>
        <img src={viewerMarvel} alt="Marvel" />
      </ViewerContent>
      <ViewerContent>
        <img src={viewerStarwars} alt="Starwars" />
      </ViewerContent>
      <ViewerContent>
        <img src={viewerNational} alt="National" />
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
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
    border-color: rgba(249, 249, 249, 0.8);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;
export default Viewers;
