import React from "react";

const Button = ({ type = "button", onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} px-3 py-[7.5px] text-sm text-black`}
    >
      {children}
    </button>
  );
};

export default Button;
