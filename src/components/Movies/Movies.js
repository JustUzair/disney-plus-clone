import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movie/movieSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Movies() {
  const movies = useSelector(selectMovies);
  console.log(movies);
  return (
    <MoviesWrapper>
      <h4 style={{ marginBottom: 10 }}>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map(movie => (
            <Wrap key={movie.id}>
              <LazyLoadImage
                className="lazyImg"
                visibleByDefault={false}
                useIntersectionObserver={true}
                effect="blur"
                style={{
                  transitionProperty: "transform",
                  transitionDuration: ".25s",
                }}
                src={movie.cardImg}
                alt={movie.title}
              />
            </Wrap>
          ))}
      </Content>
    </MoviesWrapper>
  );
}
const MoviesWrapper = styled.div`
  h4 {
    font-size: 1.3rem;
    font-weight: 600;
  }
  margin-bottom: 20px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin-left: 15px;
  }
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  .lazyImg,
  .lazy-load-image-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
export default Movies;
