import React from "react";
import arrow from "../../../assets/arrow-right.svg";
import "./style.css";

const ArrowIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2129 16.4744C13.92 16.7672 13.9198 17.242 14.2126 17.535C14.5054 17.828 14.9803 17.8282 15.2733 17.5354L20.2766 12.5354C20.4173 12.3947 20.4964 12.2039 20.4964 12.0049C20.4964 11.8059 20.4173 11.615 20.2766 11.4744L15.2733 6.47438C14.9803 6.18158 14.5054 6.18174 14.2126 6.47473C13.9198 6.76772 13.92 7.24259 14.2129 7.53539L17.9302 11.2501L5.24748 11.25C4.83326 11.25 4.49747 11.5858 4.49747 12C4.49746 12.4142 4.83325 12.75 5.24746 12.75L17.9397 12.7501L14.2129 16.4744Z"
        fill="CurrentColor"
      />
    </svg>
  );
};
const Button = ({ text, onButtonClick, disabled }) => {
  return (
    <div
      onClick={!disabled ? onButtonClick : null}
      className={`button .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
} ${disabled ? "disabled" : ""}`}
    >
      {text} <ArrowIcon />
    </div>
  );
};

export default Button;
