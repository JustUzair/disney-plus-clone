import React, { useEffect } from "react";
import styled from "styled-components";
import Viewers from "../Viewers/Viewers";
import Movies from "../Movies/Movies";
import ImgSlider from "../ImageSlider/ImgSlider";
import bgImg from "../../images/home-background.png";
import db from "../../Firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot(snapshot => {
      let tempMovies = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (
    <HomeWrapper>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Movies></Movies>
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
