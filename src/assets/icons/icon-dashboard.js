import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill={props.fill || "##6F6C99"}
    xmlns="http://www.w3.org/2000/svg"
    opacity={props.opacity || ''}
  >
    <rect
      x="7.10529"
      y="7.10529"
      width="4"
      height="4"
      rx="1.4"
    />
    <rect
      x="7.10529"
      y="13.1053"
      width="4"
      height="4"
      rx="1.4"
    />
    <rect
      x="13.1053"
      y="7.10529"
      width="4"
      height="4"
      rx="1.4"
    />
    <rect
      x="13.1053"
      y="13.1053"
      width="7"
      height="7"
      rx="1.4"
    />
  </svg>
);
