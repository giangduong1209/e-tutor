import React from "react";

interface IButton {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ className, children }: IButton) => {
  return (
    <button className={`primary-btn ${className ? className : ""}`}>
      {children}
    </button>
  );
};

export default Button;
