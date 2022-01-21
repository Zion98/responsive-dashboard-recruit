import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Personal = ({ handleModal }) => {
  return (
    <PersonalWrapper>
      <div className="personal-main">
        {/* <button onClick={handleModal}>x</button> */}
        <Row className="personal-box">
          <h2 className="title_personal mt-3 mb-3"> Personal Information </h2>
          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">First Name</p>

            <h2 className="second_personal">Oluwasegun</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">Last Name</p>

            <h2 className="second_personal">Adeyemi</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal email-box">
            <p className="first_personal">Email Address</p>

            <h2 className="second_personal">Oluwasegun</h2>
          </Col>
        </Row>
        <Row className="personal-box">
          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">Gender</p>

            <h2 className="second_personal">Male</h2>
          </Col>

          <Col lg={6} sm={12} className="mini-personal">
            <p className="first_personal">Date Of Birth</p>

            <h2 className="second_personal">5th July, 1990</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal phone-box">
            <p className="first_personal">Phone Number</p>

            <h2 className="second_personal">+2348139376401</h2>
          </Col>
        </Row>
        <Row className="personal-box">
          <Col sm={12} lg={2} className="mini-personal">
            <p className="first_personal">State of Origin</p>

            <h2 className="second_personal">Ogun State</h2>
          </Col>

          <Col sm={12} lg={8} className="location-box mini-personal">
            <p className="first_personal">Current Location</p>

            <h2 className="second_personal">Lagos State</h2>
          </Col>
        </Row>
      </div>

      <div>
        <Row className="personal-box">
          <h2 className="title_personal mt-3 mb-3"> Education & Others </h2>
          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">Highest Qualfication</p>

            <h2 className="second_personal">BSc.</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">Where did you graduate from</p>

            <h2 className="second_personal">University of Nigeria</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal email-box">
            <p className="first_personal">Course of Study</p>

            <h2 className="second_personal">Computer Science</h2>
          </Col>
        </Row>
        <Row className="personal-box">
          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">Programming Experience</p>

            <h2 className="second_personal">Expert</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">NYSC Status</p>

            <h2 className="second_personal">Served</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal phone-box">
            <p className="first_personal">Payment Option</p>

            <h2 className="second_personal">Loan Repayment</h2>
          </Col>
        </Row>
      </div>

      <div>
        <Row className="personal-box">
          <h2 className="title_personal mt-3 mb-3"> Assessment Information </h2>
          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">Location</p>

            <h2 className="second_personal">Lagos</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal">
            <p className="first_personal">Date</p>

            <h2 className="second_personal">23rd November, 2021</h2>
          </Col>

          <Col lg={4} sm={12} className="mini-personal email-box">
            <p className="first_personal">Time</p>

            <h2 className="second_personal">10:30am</h2>
          </Col>
        </Row>
      </div>
    </PersonalWrapper>
  );
};

const PersonalWrapper = styled.div`
  padding: 1rem 2rem;
  background: #fff;
  position: absolute;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4000;
  p,
  h2 {
    margin: 0;
  }

  .personal-box {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
  }

  .title_personal {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2d2f48;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e5e5;
    /* position: relative; */
    /* &:after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        bottom: -12px;
        background-color: black;
      } */
  }

  .first_personal {
    font-size: 0.9rem;
    color: #666666;
  }
  .second_personal {
    font-size: 1rem;
  }

  @media only screen and (max-width: 999px) {

    width: 90%;
    .first_personal {
      font-size: 1.2rem;
    }

    .second_personal {
    font-size: 1.4rem;
  }
  }
`;
export default Personal;
