import React from "react";

const Button = ({
  backgroundColor,
  textSize,
  title,
  borderRadius,
  color,
  width,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor, color, borderRadius }}
      className={`text-${textSize} w-${width} p-3 hover:drop-shadow-xl`}
    >
      {title}
    </button>
  );
};

export default Button;
