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
      ? "bg-brand-primary font-bold text-brand-bg-primary hover:bg-emerald-400"
      : "bg-transparent font-bold text-brand-primary outline outline-brand-primary outline-1 hover:bg-brand-primary hover:text-brand-black-primary";

  const buttonClass = `py-1 px-4 rounded-full ${variantClass} ${extraClass}`;

  return (
    <button onClick={onClick} className={buttonClass + " " + extraClass}>
      {children}
    </button>
  );
};

export default CustomButton;
