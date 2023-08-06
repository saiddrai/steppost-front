import React from "react";

function Card({ bg, textColor, title, text }) {
  return (
    <div
      className={`w-64 h-60 ${bg} bg-cover border-1 shadow-lg p-4 rounded-xl`}
    >
      <h1
        className={`text-3xl font-title font-bold  text-${textColor} mx- mb-2`}
      >
        {title}
      </h1>
      <p
        className={`font-body font-semibold ${
          textColor === "white" ? "text-white" : "black"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default Card;
