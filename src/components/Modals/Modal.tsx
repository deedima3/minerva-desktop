import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: JSX.Element;
  title?: string | null;
  extraClass?: string;
}

export default function Modal({ show, onClose, children, title, extraClass}: ModalProps) {

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <ModalOverlay darkAmount={0}>
      <div onClick={() => onClose()} className={extraClass}>
        {children}
        <button onClick={handleCloseClick}></button>
      </div>
    </ModalOverlay>
  ) : null;

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("portal")!
  );
}
