import React from "react";

export default function Wrapper({ children, height = "h-auto", blur = "",bgColor="" }) {
  return (
    <section className={`p-10  mb-10 ${height} ${blur} ${bgColor}  relative`}>
      {children}
    </section>
  );
}
