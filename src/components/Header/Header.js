import React, { useEffect, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../../features/users/userSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../Firebase";
function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);
  const history = useHistory();
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  // **********************
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);
  // ********* Sign in *************
  const signIn = async () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      })
      .catch(err => {
        console.error(err);
        history.push("/login");
      });
  };
  //  *************** Sing out ***************
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <NavWrapper clicked={click}>
      <Link to="/">
        <Logo src={logo} alt="disney+ hotstar" />
      </Link>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
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

          <ActionWrapper>
            <UserImg
              onClick={() => {
                setClick(!click);
              }}
              src={userPhoto || avatar}
              alt="profile-avatar "
            />
            <SignOutWrapper
              onClick={signOut}
              clicked={click}
              className="signOut"
              style={{
                transition: "all .25s  cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              Sign Out
            </SignOutWrapper>
          </ActionWrapper>
        </>
      )}
    </NavWrapper>
  );
}
const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const SignOutWrapper = styled.a`
  display: ${props => (props.clicked ? "block" : "none")};
  opacity: ${props => (props.clicked ? "1" : "0")};
  transition-delay: 0.3s;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s;

  &:hover {
    color: rgba(0, 0, 0);
    background-color: #f9f9f9;
    border-color: transparent;
  }
`;
const NavWrapper = styled.nav`
  height: ${props => (props.clicked ? "80px" : "70px")};
  background-color: #090b13;
  display: flex;
  align-items: center;
  margin-top: ${props => props.clicked && "5px"};
  padding: 0 36px;
  overflow-x: hidden;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

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
