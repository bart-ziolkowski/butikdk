import React, { useRef } from "react";

import MainContent from "../components/about-page/MainContent";
import { useIsVisible } from "../redux/hooks";

const About: React.FC = () => {
  const main = useRef<HTMLDivElement>(null);
  const isVisibleMain = useIsVisible(main);

  return (
    <MainContent
      ref={main}
      className={`transition-opacity ease-in duration-700 delay-300 ${
        isVisibleMain ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default About;
