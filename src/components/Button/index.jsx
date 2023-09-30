import React from "react";

const Button = ({ backgroundColor, textSize, title, borderRadius, color }) => {
  return (
    <button
      style={{ backgroundColor, color, borderRadius }}
      className={`text-${textSize} p-3 hover:drop-shadow-xl`}
    >
      {title}
    </button>
  );
};

export default Button;
