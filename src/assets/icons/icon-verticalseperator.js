import React from "react";

export default (props) => (
  <svg
    width="1"
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="0" x2="0" y2={props.height} stroke="#6F6C99" />
  </svg>
);
