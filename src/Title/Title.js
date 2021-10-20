import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";
function Title() {
  return (
    <div>
      <Link to="/">
        <img
          className="header_icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Title;
