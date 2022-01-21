import styled from "styled-components";

export const Containers = styled.div`
  display: grid;
  grid-template-areas:
    "nav header"
    "nav content";
  grid-template-columns: 240px 1fr;
  grid-template-rows: 70px 1fr;
  background-color: #f9faff;

  @media only screen and (max-width: 999px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
    grid-template-areas:
      "header"
      "content";
  }
`;

export const DashboardWrapper = styled.div`
  position: relative;
  grid-area: content;
  background-color: #fff;
  padding: 2rem;
  font-family: "Montserrat", sans-serif;
  height: 100vh;

  .card-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    grid-auto-rows: 94px;
    grid-gap: 20px;
    margin: 20px 0;
  }

  @media only screen and (max-width: 999px) {
    .card-box {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
      grid-auto-rows: 94px;
      grid-gap: 20px;
      margin: 20px;
    }

    .overview-title {
      margin-left: 1rem;
    }
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  backdrop-filter: blur(2px);
`;


   /* display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    margin-bottom: 3rem; */
