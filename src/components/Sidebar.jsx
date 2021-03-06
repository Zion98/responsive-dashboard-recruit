import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import decagon from "../assets/decagon2.svg";
const Sidebar = ({ slide, setSlide }) => {
  return (
    <SideBarWrapper slide={slide} className="slide_right">
      <div className="cancel-div">
        <button className="cancel-btn" onClick={() => setSlide(!slide)}>
          ❌
        </button>
      </div>

      <div>
        <img src={decagon} alt="decagonLogo" />
      </div>

      <div className="">
        <NavLink to="/nav/dashboard" className="dashboard">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10.0571" height="9.67033" rx="1" fill="white" />
            <rect
              x="11.7715"
              y="2.41748"
              width="8.22857"
              height="7.91209"
              rx="1"
              fill="white"
            />
            <rect
              x="11.7715"
              y="12.0879"
              width="8.22857"
              height="7.91209"
              rx="1"
              fill="white"
            />
            <rect
              x="1.71436"
              y="12.0879"
              width="8.22857"
              height="7.91209"
              rx="1"
              fill="white"
            />
          </svg>

          <p className="dashboard-title titles">Dashboard</p>
        </NavLink>

        <NavLink to="/nav/applicants" className="dashboard">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99984 8.1665C10.1049 8.1665 11.1647 8.60549 11.9461 9.38689C12.7275 10.1683 13.1665 11.2281 13.1665 12.3332V17.3332H4.83317V12.3332C4.83317 11.2281 5.27216 10.1683 6.05356 9.38689C6.83496 8.60549 7.89477 8.1665 8.99984 8.1665ZM3.4065 10.6715C3.27389 11.1188 3.19554 11.5805 3.17317 12.0465L3.1665 12.3332V17.3332H0.666504V13.5832C0.66634 12.8645 0.931528 12.171 1.4112 11.6358C1.89087 11.1007 2.55125 10.7614 3.26567 10.6832L3.40734 10.6715H3.4065ZM14.5932 10.6715C15.3348 10.7167 16.0312 11.0431 16.5403 11.5842C17.0495 12.1253 17.3331 12.8402 17.3332 13.5832V17.3332H14.8332V12.3332C14.8332 11.7557 14.7498 11.1982 14.5932 10.6715ZM3.58317 5.6665C4.1357 5.6665 4.66561 5.886 5.05631 6.2767C5.44701 6.6674 5.6665 7.1973 5.6665 7.74984C5.6665 8.30237 5.44701 8.83228 5.05631 9.22298C4.66561 9.61368 4.1357 9.83317 3.58317 9.83317C3.03064 9.83317 2.50073 9.61368 2.11003 9.22298C1.71933 8.83228 1.49984 8.30237 1.49984 7.74984C1.49984 7.1973 1.71933 6.6674 2.11003 6.2767C2.50073 5.886 3.03064 5.6665 3.58317 5.6665ZM14.4165 5.6665C14.969 5.6665 15.4989 5.886 15.8896 6.2767C16.2803 6.6674 16.4998 7.1973 16.4998 7.74984C16.4998 8.30237 16.2803 8.83228 15.8896 9.22298C15.4989 9.61368 14.969 9.83317 14.4165 9.83317C13.864 9.83317 13.3341 9.61368 12.9434 9.22298C12.5527 8.83228 12.3332 8.30237 12.3332 7.74984C12.3332 7.1973 12.5527 6.6674 12.9434 6.2767C13.3341 5.886 13.864 5.6665 14.4165 5.6665ZM8.99984 0.666504C9.88389 0.666504 10.7317 1.01769 11.3569 1.64281C11.982 2.26794 12.3332 3.11578 12.3332 3.99984C12.3332 4.88389 11.982 5.73174 11.3569 6.35686C10.7317 6.98198 9.88389 7.33317 8.99984 7.33317C8.11578 7.33317 7.26794 6.98198 6.64281 6.35686C6.01769 5.73174 5.6665 4.88389 5.6665 3.99984C5.6665 3.11578 6.01769 2.26794 6.64281 1.64281C7.26794 1.01769 8.11578 0.666504 8.99984 0.666504Z"
              fill="#21334F"
            />
          </svg>

          <p className="dashboard-title titles">Applicants</p>
        </NavLink>

        <NavLink to="/nav/assess" className="dashboard">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8C0 4.22876 0 2.34315 1.17157 1.17157C2.34315 0 4.22876 0 8 0H12C15.7712 0 17.6569 0 18.8284 1.17157C20 2.34315 20 4.22876 20 8V12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20H8C4.22876 20 2.34315 20 1.17157 18.8284C0 17.6569 0 15.7712 0 12V8ZM5.73867 14.4465C6.96118 13.5085 8.45906 13 10 13C11.5409 13 13.0388 13.5085 14.2613 14.4465C15.4838 15.3846 16.3627 16.6998 16.7615 18.1883C16.9044 18.7217 16.5878 19.2701 16.0544 19.413C15.5209 19.556 14.9726 19.2394 14.8296 18.7059C14.5448 17.6427 13.917 16.7033 13.0438 16.0332C12.1706 15.3632 11.1007 15 10 15C8.89933 15 7.82942 15.3632 6.95619 16.0332C6.08297 16.7033 5.45525 17.6427 5.17037 18.7059C5.02743 19.2394 4.47909 19.556 3.94563 19.413C3.41216 19.2701 3.09558 18.7217 3.23852 18.1883C3.63734 16.6998 4.51616 15.3846 5.73867 14.4465ZM8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7ZM10 3C7.79086 3 6 4.79086 6 7C6 9.20914 7.79086 11 10 11C12.2091 11 14 9.20914 14 7C14 4.79086 12.2091 3 10 3Z"
              fill="#21334F"
            />
          </svg>

          <p className="dashboard-title titles">Assessment</p>

          {/* <img src={dashtab} alt="dashtab" className="dashtab" /> */}
        </NavLink>

        <h2 className="others">Others</h2>

        <NavLink to="/nav/settings" className="dashboard">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9838 0.541611C12.0711 0.710929 12.0928 0.927766 12.1361 1.36144C12.2182 2.1823 12.2593 2.59274 12.4311 2.81793C12.649 3.10358 13.0034 3.25038 13.3595 3.20248C13.6402 3.16472 13.9594 2.90352 14.5979 2.38113C14.9352 2.10515 15.1038 1.96716 15.2853 1.90918C15.5158 1.83555 15.7652 1.84798 15.9872 1.94419C16.162 2.01994 16.3161 2.17402 16.6243 2.4822L17.5178 3.37567C17.8259 3.68385 17.98 3.83794 18.0558 4.01275C18.152 4.23478 18.1644 4.48415 18.0908 4.71464C18.0328 4.89612 17.8948 5.06478 17.6188 5.4021C17.0964 6.0406 16.8352 6.35984 16.7975 6.64056C16.7496 6.99662 16.8964 7.35102 17.182 7.56893C17.4072 7.74072 17.8176 7.78176 18.6385 7.86385C19.0722 7.90722 19.2891 7.92891 19.4584 8.01624C19.6734 8.12716 19.841 8.31228 19.9299 8.53729C20 8.71447 20 8.93239 20 9.36824V10.6319C20 11.0676 20 11.2855 19.93 11.4626C19.841 11.6877 19.6734 11.8729 19.4583 11.9838C19.289 12.0711 19.0722 12.0928 18.6386 12.1361L18.6386 12.1361C17.818 12.2182 17.4077 12.2592 17.1825 12.4309C16.8967 12.6489 16.7499 13.0034 16.7979 13.3596C16.8357 13.6402 17.0968 13.9593 17.619 14.5976C17.8949 14.9348 18.0328 15.1034 18.0908 15.2848C18.1645 15.5154 18.152 15.7648 18.0558 15.9869C17.98 16.1617 17.826 16.3157 17.5179 16.6238L16.6243 17.5174C16.3162 17.8255 16.1621 17.9796 15.9873 18.0554C15.7652 18.1516 15.5159 18.164 15.2854 18.0904C15.1039 18.0324 14.9352 17.8944 14.5979 17.6184L14.5979 17.6184C13.9594 17.096 13.6402 16.8348 13.3595 16.7971C13.0034 16.7492 12.649 16.896 12.4311 17.1816C12.2593 17.4068 12.2183 17.8173 12.1362 18.6383C12.0928 19.0722 12.0711 19.2891 11.9837 19.4585C11.8728 19.6735 11.6877 19.8409 11.4628 19.9299C11.2856 20 11.0676 20 10.6316 20H9.36824C8.93239 20 8.71447 20 8.53729 19.9299C8.31228 19.841 8.12716 19.6734 8.01624 19.4584C7.92891 19.2891 7.90722 19.0722 7.86385 18.6385C7.78176 17.8176 7.74072 17.4072 7.56892 17.182C7.35101 16.8964 6.99663 16.7496 6.64057 16.7975C6.35985 16.8352 6.04059 17.0964 5.40208 17.6189L5.40206 17.6189C5.06473 17.8949 4.89607 18.0329 4.71458 18.0908C4.4841 18.1645 4.23474 18.152 4.01272 18.0558C3.8379 17.9801 3.6838 17.826 3.37561 17.5178L2.48217 16.6243C2.17398 16.3162 2.01988 16.1621 1.94414 15.9873C1.84794 15.7652 1.8355 15.5159 1.90913 15.2854C1.96711 15.1039 2.10511 14.9352 2.3811 14.5979C2.90351 13.9594 3.16471 13.6402 3.20247 13.3594C3.25037 13.0034 3.10357 12.649 2.81792 12.4311C2.59273 12.2593 2.1823 12.2182 1.36143 12.1361C0.927764 12.0928 0.71093 12.0711 0.541612 11.9838C0.326558 11.8728 0.159016 11.6877 0.0700471 11.4627C0 11.2855 0 11.0676 0 10.6318V9.36835C0 8.9324 0 8.71442 0.0700841 8.53721C0.15905 8.31226 0.326541 8.12719 0.541523 8.01628C0.710878 7.92891 0.927769 7.90722 1.36155 7.86384H1.36155H1.36156C2.18264 7.78173 2.59319 7.74068 2.81842 7.56881C3.10395 7.35092 3.2507 6.99664 3.20287 6.64066C3.16514 6.35987 2.90385 6.04052 2.38128 5.40182C2.10516 5.06435 1.96711 4.89561 1.90914 4.71405C1.83557 4.48364 1.848 4.23438 1.94413 4.01243C2.01988 3.83754 2.17403 3.68339 2.48233 3.37509L3.37565 2.48177L3.37566 2.48177C3.68385 2.17357 3.83795 2.01947 4.01277 1.94373C4.23478 1.84753 4.48414 1.8351 4.71463 1.90872C4.89612 1.9667 5.06481 2.10472 5.4022 2.38076C6.04061 2.9031 6.35982 3.16427 6.64044 3.20207C6.99661 3.25003 7.35113 3.10319 7.56907 2.81742C7.74077 2.59227 7.78181 2.18195 7.86387 1.36131C7.90722 0.927757 7.9289 0.710983 8.01619 0.541704C8.12712 0.326575 8.31231 0.158981 8.53741 0.0700092C8.71453 0 8.93238 0 9.3681 0H10.6318C11.0676 0 11.2855 0 11.4627 0.0700478C11.6877 0.159016 11.8728 0.326558 11.9838 0.541611ZM10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z"
              fill="#21334F"
            />
          </svg>

          <p className="dashboard-title titles">Settings</p>
        </NavLink>
      </div>

      <NavLink
        to="0#"
        onClick={() => alert("Man dam")}
        className="dashboard logout"
      >
        <svg
          width="14"
          height="21"
          viewBox="0 0 14 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.621 1.03773L6.93142 0.457949C3.71084 -0.0481423 2.10055 -0.301188 1.05027 0.596932C0 1.49505 0 3.12511 0 6.38521V9.36914H5.91938L3.21913 5.99384L4.78087 4.74445L8.78087 9.74445L9.28062 10.3691L8.78087 10.9938L4.78087 15.9938L3.21913 14.7444L5.91938 11.3691H0V14.3522C0 17.6123 0 19.2424 1.05027 20.1405C2.10055 21.0386 3.71084 20.7856 6.93143 20.2795L10.621 19.6997C12.2337 19.4463 13.04 19.3196 13.52 18.7583C14 18.197 14 17.3807 14 15.7482V4.98924C14 3.35672 14 2.54046 13.52 1.97917C13.04 1.41788 12.2337 1.29116 10.621 1.03773Z"
            fill="#34A853"
          />
        </svg>

        <p className="dashboard-title titles">Logout</p>
      </NavLink>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  grid-area: nav;
  font-family: "Bree Serif", serif;
  font-size: 16px;
  background: #fafafa;
  color: #030303;
  padding: 15px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* height: 100%; */
  position: fixed;
  z-index: 9;
  height: 100vh;

  .cancel-div {
    width: 100%;
    display: none;
  }

  .cancel-btn {
    border: none;
    background: transparent;
    float: right;
  }

  .dashboard {
    margin-top: 2rem;
    color: #21334f;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  svg,
  .dashboard-title {
    display: block;
    font-weight: normal;
    font-size: 1rem;
  }

  .titles {
    margin: 0;
    margin-left: 1rem;
  }

  rect {
    fill: #21334f;
  }

  a {
    padding: 0.5rem 2rem;
    margin: 1rem 0;
    transition: all 0.3s ease-out;
  }

  a.active {
    background: #34a853;
    border-radius: 4px;

    color: #fff;
    rect {
      fill: #fff;
    }

    path {
      fill: #fff;
    }
  }

  .others {
    margin-top: 2rem;
    padding-left: 2rem;
    font-size: 1.1rem;
    font-weight: 800;
  }

  .logout {
    position: relative;
    top: 10rem;
    color: #34a853;
  }

  @media only screen and (max-width: 999px) {
    width: 240px;
    position: fixed;
    overflow-y: auto;
    transform: translateX(-245px);
    transition: all 0.6s ease-in-out;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    z-index: 2;
    height: 100%;
    transform: ${({ slide }) => (slide === true ? `translateX(0)` : null)};

    .cancel-div {
      display: block;
    }
  }
`;

export default Sidebar;
