import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: "blue" | "red" | "green" | "gray";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "blue",
  onClick,
}) => {
  const bgColor = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    gray: "bg-gray-500 hover:bg-gray-600",
  }[buttonBackgroundColor];

  return (
    <button
      onClick={onClick}
      className={`${bgColor} text-white font-semibold py-2 px-6 rounded-full text-sm transition duration-300 shadow-md transform hover:scale-105`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
