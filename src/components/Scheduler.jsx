import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import SelectBox from "./Select";
import { optionsDate, optionsLocation, optionsTime } from "./DataBox/options";
import { ModalWrapper } from "./styled";
const Scheduler = ({ handleModal }) => {
  const optionsD = optionsDate.map((single, index) => {
    return {
      value: single.date,
      label: single.label,
    };
  });

  const optionsL = optionsLocation.map((single, index) => {
    return {
      value: single.location,
      label: single.label,
    };
  });

  const optionsT = optionsTime.map((single, index) => {
    return {
      value: single.date,
      label: single.label,
    };
  });

  // const [single, setSingle] = useState("");

  return ReactDom.createPortal(
    <>
      <ModalWithTransitionStyles>
        <ScheduleWrapper>
          <div>
            <h2>Assessment Scheduler</h2>

            <p>Set up time, date and location for assessments</p>
          </div>

          <div className="d-flex justify-content-between mt-3 mb-3">
            <div className="single-box">
              <p>Location</p>
              <SelectBox
                options={optionsL}
                placeholder={"Select Location"}
                single
              />
            </div>
            <div className="single-box">
              <p>Date</p>
              <SelectBox
                options={optionsD}
                placeholder={"Select Date"}
                single
              />
            </div>
            <div className="single-box">
              <p>Time</p>
              <SelectBox
                options={optionsT}
                placeholder={"Select Time"}
                single
              />
            </div>
            <div className="single-box">
              <p>Capacity</p>
              <input
                type="text"
                placeholder="Enter capacity"
                className="capacity-text"
              />
            </div>
          </div>

          <div className="schedule-btns d-flex justify-content-end">
            <button className="cancel-btn" onClick={() => handleModal()}>
              Cancel
            </button>
            <button className="save-btn">Save</button>
          </div>
        </ScheduleWrapper>
      </ModalWithTransitionStyles>
    </>,
    document.getElementById("portal")
  );
};

const ScheduleWrapper = styled.div`
  padding: 2rem 2rem;
  padding-bottom: 5rem;
  background: #fff;
  position: absolute;
  width: 60%;
  height: auto;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%);
  z-index: 4000;

  p {
    margin: 0;
    font-weight: bold;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
  }

  .single-box {
    background: #f6f7f9;
  }

  .select-field {
    width: 200px;
  }

  .capacity-text {
    border: none;
    outline: none;
    background: #f6f7f9;
    height: 65%;

    &::placeholder {
      color: #000;
      padding-left: 0.5rem;
      color: #666666;
      opacity: 0.8;
    }
  }

  .save-btn,
  .cancel-btn {
    background: transparent;
    outline: none;
    border: none;
    display: block;
    padding: 0.5rem 2rem;
  }

  .save-btn {
    margin-left: 1rem;
    color: #fff;
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
  }

  .cancel-btn {
    transition: all 0.1s ease-out;
    &:hover {
      background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
      color: #fff;
    }
  }

  .schedule-btns {
    margin-top: 2rem;
  }
`;

const duration = 300;
const ModalWithTransitionStyles = styled(ModalWrapper)`
  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity ${duration}ms ease-in;
  }

  &.fade-leave {
    opacity: 1;
  }

  &.fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity ${duration}ms ease-in;
  }
`;

export default Scheduler;
