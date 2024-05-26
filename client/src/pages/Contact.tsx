import React, { useRef } from "react";

import MainContent from "../components/contact-page/MainContent";
import { useIsVisible } from "../redux/hooks";

const Contact: React.FC = () => {
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

export default Contact;
