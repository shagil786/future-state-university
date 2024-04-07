import React, { Fragment } from "react";
import styles from "./Section2.module.css";

const Section2 = () => {
  const {
    container,
    aboutStyle,
    futureStyle,
    uniStyle,
    content,
    wrapper,
    iframeStyle,
    buttonBuild,
  } = styles;
  const about = ["Learn", "Assess", "Connect", "Build Careers"];
  return (
    <div className={container} id="2">
      <div className={content}>
        <div className={wrapper}>
          <p className={futureStyle}>Hone Your</p>
          <p className={uniStyle}>Potential to Succeed</p>
          <p className={aboutStyle}>
            FSU is the world's first MMO professional social network and careers
            platform. In-game interactions lead to career advancement in the
            real-world!
          </p>
          <div className={buttonBuild}>Build your Career Quest today!</div>
        </div>
        <div className={iframeStyle}>
          <iframe
            src="https://www.youtube.com/embed/-DXa8dyqBM8?si=ZGR2vB9BID9t2LIr"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
