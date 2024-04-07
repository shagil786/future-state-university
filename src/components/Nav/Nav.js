import React, { useContext, useEffect } from "react";
import styles from "./Nav.module.css";
import futureStateIcon from "../../assets/Images/futureStateIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import { DeveloperDataContext } from "../../utils/appContext";

const Nav = () => {
  const { appData, setAppData } = useContext(DeveloperDataContext);
  const { container, leftItem, rightItem, navsStyle, enterButton, icon } =
    styles;

  return (
    <div className={container}>
      <div className={leftItem}>
        <img
          alt="future-state-university"
          onClick={() => window.location.reload()}
          src={futureStateIcon}
        />
        <div
          className={navsStyle}
          style={{
            color: appData.active == 3 ? "black" : "",
          }}
        >
          <a>Companies</a>
          <a>Solutions</a>
          <a>About</a>
        </div>
      </div>
      <div className={rightItem}>
        <div className={enterButton}>
          <FontAwesomeIcon icon={faSquareUpRight} className={icon} />
          <span>ENTER FSU</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
