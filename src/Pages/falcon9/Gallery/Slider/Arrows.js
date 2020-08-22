import React from "react";

const Arrows = {
  leftArrowSvg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="10"
      viewBox="0 0 6 10"
    >
      <path
        d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z"
        transform="translate(6) rotate(90)"
        fill="#fff"
      ></path>
    </svg>
  ),
  rightArrowSvg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="10"
      viewBox="0 0 6 10"
    >
      <path
        d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z"
        transform="translate(0 10) rotate(-90)"
        fill="#fff"
      ></path>
    </svg>
  ),
};

export default Arrows;
