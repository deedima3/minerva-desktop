import React from "react";
import { CustomButtonProps } from "../../interfaces/custombutton.interface";

const CustomButton = ({
  onClick = () => {},
  children,
  extraClass = "",
  variant = "solid",
}: CustomButtonProps) => {

  const variantClass =
    variant === "solid"
      ? "bg-brand-primary font-bold text-brand-bg-primary"
      : "bg-transparent font-bold text-brand-primary outline outline-brand-primary outline-1";

  const buttonClass = `py-1 px-4 rounded-full ${variantClass} ${extraClass}`;

  return (
    <button onClick={onClick} className={buttonClass + " " + extraClass}>
      {children}
    </button>
  );
};

export default CustomButton;
