import React from "react";
import ReactDOM from "react-dom";
import { ToastProps } from "../../interfaces/toast.interface";

const Toast = ({ show, icon, title, variant }: ToastProps) => {
  const toast = show ? (
    <div className="absolute bottom-0 right-0 py-8 px-36 z-50">
      <div className={`toast-container ${variant}`}>
        <div className="toast-icon">{icon}</div>
        <div className="toast-content">
          <h3 className="toast-title">{title}</h3>
        </div>
      </div>
    </div>
  ) : null;

  return ReactDOM.createPortal(toast, document.getElementById("toast")!);
};

export default Toast;
