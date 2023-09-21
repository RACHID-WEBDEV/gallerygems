import classNames from "classnames";
import React from "react";

type ButtonType = {
  color?: string;
  children: string;
  className?: string;
  onClick?: () => void;
};
const Button = ({
  color = "defaultColor",
  children,
  className = "w-max",
  onClick,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "relative flex h-12 items-center justify-center px-7 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95",
        {
          " before:bg-defaultColor": color === "defaultColor",
        },
        {
          "before:border before:border-transparent before:bg-defaultColor/10 ":
            color === "secondary",
        },
        className
      )}
    >
      <span
        className={classNames(
          "relative w-max",
          { "text-white": color === "defaultColor" },
          {
            "text-defaultColor ": color === "secondary",
          }
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
