"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon,
  isDisabled
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      type={btnType || "button"}
      
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && rightIcon}
    </button>
  );
};

export default CustomButton;
