import React, { useRef } from "react";

import Hero from "../components/home-page/Hero";
import Newsletter from "../components/home-page/Newsletter";
import ProductCollection from "../components/home-page/ProductCollection";
import { useIsVisible } from "../redux/hooks";

const Home: React.FC = () => {
  const hero = useRef<HTMLDivElement>(null);
  const isVisibleHero = useIsVisible(hero);

  const products = useRef<HTMLDivElement>(null);
  const isVisibleProducts = useIsVisible(products);

  return (
    <>
      <Hero
        ref={hero}
        className={`transition-opacity ease-in duration-700 delay-300 ${
          isVisibleHero ? "opacity-100" : "opacity-0"
        }`}
      />
      <ProductCollection
        ref={products}
        className={`transition-opacity ease-in duration-700 delay-300 ${
          isVisibleProducts ? "opacity-100" : "opacity-0"
        }`}
      />
      <Newsletter />
    </>
  );
};

export default Home;
