import React from "react";
import { createPortal } from "react-dom";
import { ReactComponent as SVGClose } from '../assets/star.svg';


const Modal = (props) =>
  props.isOpen ?
    createPortal(
      <div>
        <figure cursor='pointer' onClick={props.onClose} > X
          <SVGClose >X</SVGClose>
        </figure>
        <div>{props.children}</div>
      </div>,
      document.getElementById("modal")
    )
    : '';

export default Modal;