import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import Scheduler from "./Scheduler";
import { DashboardWrapper } from "./styled";
const Assessment = () => {
  const [showSchedule, setShowScedule] = useState(false);

  const handleModal = () => {
    setShowScedule(!showSchedule);
  };

  return (
    <DashboardWrapper>
      <AssessmentWrapper>
        <div className="d-flex justify-content-between align-items-center assess-title">
          <h2>Assessement</h2>{" "}
          <button onClick={() => handleModal()} className="create-assess">
            Create Assessment
          </button>
        </div>
        <div className="assess">
          <h2 className="no-assess">
            No assessment schedule created
            <br />
            Click the button above to create a schedule
          </h2>
        </div>

        <CSSTransition
          in={showSchedule}
          className="fade"
          classNames="fade"
          unmountOnExit
          timeout={300}
        >
          <Scheduler handleModal={handleModal} />
        </CSSTransition>
      </AssessmentWrapper>
    </DashboardWrapper>
  );
};

const AssessmentWrapper = styled.div`
  h2,
  p {
    margin: 0;
  }
  .assess-title {
    h2 {
      font-size: 1.3rem;
    }
  }
  .create-assess {
    display: block;
    border: none;
    padding: 1rem 2rem;
    color: #fff;
    background: linear-gradient(135deg, #b8d344 0%, #34a853 100%);
  }

  .assess {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }

  .no-assess {
    text-align: center;
    font-size: 1.5rem;
    color: #666666;
    opacity: 0.7;
    font-weight: 200;
  }


  
`;

export default Assessment;
