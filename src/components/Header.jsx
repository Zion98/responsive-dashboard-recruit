import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import search from "../assets/search.svg";
import chevron from "../assets/chevron_down.svg";
import decagon from "../assets/decagonLogo.svg";
import ham from "../assets/hamburger.svg";
const Header = ({ setSlide, slide }) => {
  return (
    <HeaderWrapper>
      <div className="mobile-nav">
        <div className="ham-icon" onClick={() => setSlide(!slide)}>
          <img src={ham} alt="search" className="" />
        </div>
        <Link to="0#" className="logo-link">
          <img src={decagon} alt="search" className="" />
        </Link>
      </div>

      <div className="all-box">
        <div className="search-box">
          <img src={search} alt="search" className="search-img" />
          <input type="search" placeholder="Search for accounts, users..." />
        </div>
        <button className="search-btn">Search</button>
      </div>

      <div className="profile-box">
        <span className="initials">UI</span>
        <p>Ifeanyi Umanikwe </p>
        <span>
          {" "}
          <img src={chevron} alt="search" className="chev-down" />
        </span>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  grid-area: header;
  background-color: #fff !important;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  .mobile-nav {
    display: none;
  }
  .all-box {
    display: flex;
    align-items: center;
  }

  .search-box {
    background: #f6f7f9;
    height: 100%;
    width: 300px;
    position: relative;
  }

  .search-img {
    top: 0.7rem;
    left: 0.6rem;
    position: absolute;
  }

  .profile-box {
    .initials {
      display: inline-block;
      color: #2d2f48;
      background: rgba(60, 171, 82, 0.2);
      border-radius: 60px;
      width: 30px;
      height: 30px;
      font-weight: bold;
      padding: 0.5rem;
      line-height: 1rem;
      margin-right: 1rem;
    }
    p {
      display: inline-block;
    }
  }

  input[type="search"] {
    padding: 0.5rem 1rem;
    background: #f6f7f9;
    border: none;
    outline: none;
    width: 100%;

    ::placeholder {
      padding-left: 1rem;
      font-weight: 200;
    }
  }

  .search-btn {
    display: inline-block;
    border: none;
    color: #fff;
    padding: 0.5rem 2.5rem;
    font-size: 1rem;
    margin-left: 1rem;
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
    &:active {
      outline: none;
      border: none;
    }
  }

  @media only screen and (max-width: 999px) {
    .mobile-nav {
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .all-box,
    .profile-box {
      display: none;
    }
  }

  @media only screen and (max-width: 999px) {
  }
`;

export default Header;
