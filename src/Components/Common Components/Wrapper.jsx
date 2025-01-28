import React from "react";

export default function Wrapper({
  children,
  height = "h-auto",
  blur = "",
  bgColor = "",
  centerHV=""
 
}) {
  return (
    <section className={`${centerHV} p-10  mb-10 ${height} ${blur} ${bgColor}  relative`}>
      {children}
    </section>
  );
}
