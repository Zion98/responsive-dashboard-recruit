import React from "react";
import ReactDom from "react-dom";
import Personal from "./Personal";
import { ModalWrapper } from "./styled";
import styled from "styled-components";


const Modal = ({ handleModal }) => {
  return ReactDom.createPortal(
    <>
      <ModalWithTransitionStyles>
        <Personal handleModal={handleModal} />
      </ModalWithTransitionStyles>
    </>,
    document.getElementById("portal")
  );
};



const duration = 200;
const ModalWithTransitionStyles = styled(ModalWrapper)`
  &.alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${duration}ms, transform ${duration}ms;
  }
  &.alert-exit {
    opacity: 1;
  }
  &.alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity ${duration}ms, transform ${duration}ms;
  }
`;

export default Modal;
