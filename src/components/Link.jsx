import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Link = ({ link, svg, title }) => {
  return (
    <NavLink to={link} className="dashboard">
      {/* < */}

      {svg}

      <p className="dashboard-title titles">{title}</p>

      {/* <img src={dashtab} alt="dashtab" className="dashtab" /> */}
    </NavLink>
  );
};

const SideBarWrapper = styled.div`
  .dashboard {
    color: #21334f;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  svg,
  .dashboard-title {
    display: block;
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
  }

  a.active {
    background: #34a853;
    border-radius: 4px;

    color: #fff;
    rect {
      fill: #fff;
    }
  }
`;

export default Link;
