import React, { Fragment } from "react";
import { createPortal } from "react-dom";


const Modal = (props) =>
  props.isOpen ?
    createPortal(
      <Fragment>
        <figure onClick={props.onClose}>
          X
        </figure>
        <Fragment>{props.children}</Fragment>
      </Fragment>,
      document.getElementById('modal'),
    )
    : '';

export default Modal;