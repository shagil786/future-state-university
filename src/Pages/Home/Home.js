import React, { Fragment, useEffect, useRef, useContext } from "react";
import styles from "./Home.module.css";
import Section1 from "../../components/Section1/Section1";
import Section2 from "../../components/Section2/Section2";
import Section3 from "../../components/Section3/Section3";
import { DeveloperDataContext } from "../../utils/appContext";

const Home = () => {
  const { container } = styles;
  const containerRef = useRef(null);
  const { appData, setAppData } = useContext(DeveloperDataContext);

  useEffect(() => {
    const sections = containerRef.current?.childNodes;

    const observerOption = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAppData({ active: entry.target.id });
          entry.target.setAttribute("data-active", "active");
        } else {
          entry.target.removeAttribute("data-active");
        }
      });
    };

    const sectionObservers = [];
    Array.from(sections).forEach((section) => {
      const observer = new IntersectionObserver(
        handleIntersect,
        observerOption,
      );
      observer.observe(section);
      sectionObservers.push(observer);
    });

    return () => {
      sectionObservers.forEach((observer) => observer.disconnect());
    };
  }, []);
  return (
    <div className={container} ref={containerRef}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;
