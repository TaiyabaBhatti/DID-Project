import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  text,
  bgColor = "bg-white",
  textColor = "text-black",
  type = "button",
  to = null,
  onclick = null,
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={`${textColor} rounded-xl ${bgColor} ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }  font-semibold text-center text-lg px-3 py-2`}
    >
      {to ? <Link to={to}>{text}</Link> : `${text}`}
    </button>
  );
}
