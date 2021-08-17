import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import detail1 from "../../images/detail-1.jfif";
// Button Images
import grpIcon from "../../images/group-icon.png";
import playBtn from "../../images/play-icon-black.png";
import trailerBtn from "../../images/play-icon-white.png";
import db from "../../Firebase";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    db.collection("movies")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          setMovie(doc.data());
        } else return;
      });
  }, [id]);
  return (
    <Container>
      {movie && (
        <>
          <Background>
            <ImgContainer img={movie.backgroundImg}></ImgContainer>
          </Background>
          <ImgTitle>
            <img src={movie.titleImg} alt="title" />
          </ImgTitle>
          <Controls>
            <PlayButton>
              <img src={playBtn} alt="play button" /> <span>Play</span>
            </PlayButton>
            <TrailerButton>
              <img src={trailerBtn} alt="trailer button" /> <span>Trailer</span>
            </TrailerButton>
            <div>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GrpWatchButton>
                <img src={grpIcon} alt="group icon" />
              </GrpWatchButton>
            </div>
          </Controls>
          <InfoContainer>
            <Subtitle>{movie.subTitle}</Subtitle>
            <Description>{movie.description}</Description>
          </InfoContainer>
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  min-height: calc(100vh - 70px);
  min-width: 200px;
  /* padding: 0 calc(3.5vw + 5px); */
  position: relative;
  /* min-height: 200vh; */
  @media (max-width: 251px) {
    padding: 0 20px;
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.95;
`;
// Image Container and content
const ImgContainer = styled.div`
  background: url(${props => props.img}) no-repeat 60% 10% / cover;
  background-blend-mode: revert;
  width: 100%;
  height: 78vh;

  &:before {
    content: "";
    background: linear-gradient(
      to bottom,
      transparent 12%,
      rgba(14, 21, 57, 0.3) 50%,
      rgba(4, 7, 20, 1) 90%
    );
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    height: 80vh;
  }
  @media (max-width: 200px) {
    overflow: hidden;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 190px;
  position: absolute;
  width: 35vw;
  @media (min-width: 1280px) {
    margin-top: 0.8rem;
  }
  padding: 0 calc(3vw + 5px);
  @media (max-width: 200px) {
    padding: 0;
    img {
      width: 100% !important;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    left: 0;
    top: 0;
  }
  @media (max-width: 768px) {
    img {
      width: 12rem;
      margin: 0 auto;
    }
  }
`;
// Control
const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  top: 20rem;
  padding: 0 calc(3.5vw + 5px);
  div {
    display: flex;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    top: 16rem;

    div {
      justify-content: space-between !important;
    }
  }
  @media (max-width: 200px) {
    overflow: hidden;
  }
`;
// Control Buttons
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgba(249, 249, 249);
  border: none;
  padding: 0 24px;
  letter-spacing: 1.8px;
  margin-right: 22px;

  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    background-color: rgba(198, 198, 198, 1);
  }
  @media (max-width: 485px) {
    flex-grow: 1;
    margin-bottom: 20px;
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GrpWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`;
// ****************INFO CONTAINER***********
const InfoContainer = styled.div`
  position: absolute;
  top: 26rem;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    top: 26rem;
  }
  @media (max-width: 350px) {
    top: 30rem;
  }
`;
const Subtitle = styled.div`
  font-weight: 600;
  font-size: 15px;
  min-height: 20px;
  align-self: flex-start;
  margin-left: 50px;
  @media (max-width: 800px) {
    margin-left: 40px;
  }
  @media (max-width: 350px) {
    margin-left: 20px;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 200;
  margin-left: 80px;
  max-width: 70%;
  @media (max-width: 800px) {
    max-width: 90%;
    margin-left: 40px;
  }
  @media (max-width: 350px) {
    max-width: 100%;
    margin-left: 20px;
  }
`;

export default Detail;
