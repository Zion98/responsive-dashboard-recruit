import React from "react";
import styled from "styled-components";

const Card = ({ number, title, bgColor, numberColor, border }) => {

  return (
    <CardWrapper numberColor={numberColor} bgColor={bgColor} border={border}>
      <p className="cardTitle">{title}</p>
      <p className="cardNumber">{number}</p>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background: ${({ bgColor }) => bgColor || ""};
  border: ${({ border }) => border || ""};
  border-radius: 4px;
  padding: 1rem;
  flex-basis: 20%;
  column-gap: 1rem;

  p {
    margin: 0;
  }

  .cardTitle {
    color: #21334f;
    font-weight: 300;
  }

  .cardNumber {
    margin-top: 0.4rem;
    color: ${({ numberColor }) => numberColor || "brown"};
    font-weight: 900;
    font-size: 1.5rem;
  }
`;

export default Card;
