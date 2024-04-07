import React, { Fragment } from "react";
import styles from "./Section1.module.css";

const Section1 = () => {
  const { container, aboutStyle, futureStyle, uniStyle, content, borderStyle } =
    styles;
  const about = ["Learn", "Assess", "Connect", "Build Careers"];
  return (
    <div className={container} id="1">
      <div className={content}>
        <p className={futureStyle}>future state</p>
        <p className={uniStyle}>university</p>
        <div className={aboutStyle}>
          {about?.map((each, index) => (
            <Fragment key={index}>
              <p key={index}>{each}</p>
              <p className={borderStyle}></p>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
