import { StopOutlined, CheckOutlined, WarningOutlined } from "@ant-design/icons";
import React from "react";
import ReactDOM from "react-dom";
import { ToastProps } from "../../interfaces/toast.interface";

const Toast = ({ show, title, variant, extraClass, message}: ToastProps) => {

  const getColor = () => {
    switch (variant) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-brand-primary-secondary";
    }
  }

  const getIcons = () => {
    switch (variant) {
      case "success":
        return <CheckOutlined className="text-green-500 text-2xl" />;
      case "warning":
        return <WarningOutlined className="text-yellow-500 text-2xl" />;
      case "error":
        return <StopOutlined className="text-red-500 text-2xl" />;
      default:
        return null;
    }
  }

  const toast = show ? (
    <div className="absolute bottom-0 right-0 py-8 px-10 z-50">
      <div className={`bg-brand-black-secondary rounded-md flex px-20 py-10 justify-between w-full gap-10`}>
        <div className="flex items-center">{getIcons()}</div>
        <div className={`w-0.5 ${getColor()}`}/>
        <div className="text-white justify-center flex flex-col">
          <h1 className="text-xl font-bold">{title}</h1>
          <h3 className="text-md">{message}</h3>
        </div>
      </div>
    </div>
  ) : null;

  return ReactDOM.createPortal(toast, document.getElementById("toast")!);
};

export default Toast;
