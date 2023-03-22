import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as SVGClose } from '../assets/star.svg';


const Modal = (props) =>
  props.isOpen ?
    createPortal(
      <Fragment>
        <figure onClick={props.onClose}>
          <SVGClose>X</SVGClose>
        </figure>
        <Fragment>{props.children}</Fragment>
      </Fragment>,
      document.getElementById('modal'),
    )
    : '';

export default Modal;