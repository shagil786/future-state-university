import React, { Fragment, useRef, useEffect } from "react";
import styles from "./Section3.module.css";
import bg1 from "../../assets/Images/section3_1.png";
import bg2 from "../../assets/Images/section3_2.png";
import bg3 from "../../assets/Images/section3_3.png";
import bg4 from "../../assets/Images/section3_4.png";
import bg5 from "../../assets/Images/section3_5.png";
import bg6 from "../../assets/Images/section3_6.png";
import bg1Icon from "../../assets/Images/section3_1_icon.png";

const Section3 = () => {
  const { container, wrapper, content, titleStyle, aboutContent } = styles;
  const about = [
    {
      img: bg1,
      icon: bg1Icon,
      title: "SocialU",
      subTitle: "Multiplayer Professional Social Networking",
      content:
        "Forge meaningful connections in our virtual meeting spaces. Interact and grow with a diverse network of professionals, transcending the limits of traditional 2D platforms.",
    },
    {
      img: bg2,
    },
    {
      img: bg3,
    },
    {
      img: bg4,
    },
    {
      img: bg5,
    },
    {
      img: bg6,
    },
  ];
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      let isHorizontalScrolling = false;
      let scrollThreshold = 0; // Adjust the threshold value as needed

      const onWheel = (e) => {
        console.log(window.screenTop);
        if (!isHorizontalScrolling && el.scrollTop >= scrollThreshold) {
          isHorizontalScrolling = true;
        }

        if (isHorizontalScrolling) {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 100,
            behavior: "smooth",
          });
        } else {
          el.scrollTop += e.deltaY;
        }
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div className={wrapper} id="3">
      <div className={titleStyle}>
        <p>Professional Growth & Connections, Reimagined!</p>
        <p>
          FSU is interactive and engaging professional networking, career
          matching, and job assessments based in cognitive and behavioral
          science.
        </p>
      </div>
      <div className={container} ref={sectionRef}>
        {about.map((each, index) => (
          <div
            className={content}
            key={index}
            style={{
              "--img": `url(${each?.img})`,
            }}
          >
            <div className={aboutContent}>
              <img src={each?.icon} alt="icon" />
              <p>{each?.title}</p>
              <p>{each?.subTitle}</p>
              <p>{each?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
