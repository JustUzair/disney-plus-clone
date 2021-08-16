import React from "react";
import styled from "styled-components";
// Nav Images
import logo from "../../images/logo.svg";
import homeIcon from "../../images/home-icon.svg";
import searchIcon from "../../images/search-icon.svg";
import watchlistIcon from "../../images/watchlist-icon.svg";
import originalIcon from "../../images/original-icon.svg";
import movieIcon from "../../images/movie-icon.svg";
import seriesIcon from "../../images/series-icon.svg";
import avatar from "../../images/avatar.png";
// Router Link
import { Link } from "react-router-dom";
function Header() {
  return (
    <NavWrapper>
      <Link to="/">
        <Logo src={logo} alt="disney+ hotstar" />
      </Link>
      <NavMenu>
        <a>
          <img src={homeIcon} alt="home-icon" />
          <span>HOME</span>
        </a>
        <a>
          <img src={searchIcon} alt="search-icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={watchlistIcon} alt="watchlist-icon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={originalIcon} alt="originals-icon" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src={movieIcon} alt="movies-icon" />
          <span>MOVIE</span>
        </a>
        <a>
          <img src={seriesIcon} alt="series-icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src={avatar}></UserImg>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  @media (max-width: 720px) {
    justify-content: space-between;
  }
  @media (max-width: 1023px) {
    padding: 0 15px;
  }
`;
const Logo = styled.img`
  width: 80px;
  cursor: pointer;
  @media (max-width: 1023px) {
    width: 70px;
  }
`;
const NavMenu = styled.div`
  display: flex;
  padding: 0 20px;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  @media (max-width: 1023px) {
    margin-left: 5px;
    a {
      padding: 0 7px !important;
    }
  }
  @media (max-width: 720px) {
    visibility: hidden;
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;

      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
        transform-origin: left center;
        opacity: 0;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  justify-self: right;
  cursor: pointer;
  border: 2px solid white;
`;
export default Header;
