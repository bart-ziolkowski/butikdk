import React, { forwardRef } from "react";

import logoImage from "../../assets/images/big_logo.png";
import storeImage from "../../assets/images/store.png";

type MainContentProps = {
  className?: string;
};

const MainContent = forwardRef<HTMLDivElement, MainContentProps>(
  ({ className }, ref) => {
    return (
      <div ref={ref} className={className}>
        <div className="m-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              The Premium Sneakers Store in Copenhagen
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src={logoImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Welcome to our sneaker store, nestled in the heart of
                  Copenhagen, where fashion meets function. We are dedicated to
                  offering an unparalleled selection of sneakers, ensuring that
                  every customer finds their perfect pair. Our store features
                  top brands such as Adidas, Nike, Veja, and Converse, each
                  known for their unique blend of style and comfort. Our
                  carefully curated collection caters to diverse tastes, from
                  timeless classics to the latest trends, making it easy for you
                  to find the perfect addition to your wardrobe. Experience the
                  best in sneaker fashion with us.
                </p>

                <p>
                  At our Copenhagen store, customer satisfaction is our top
                  priority. Our friendly and knowledgeable staff are always on
                  hand to provide personalized service, helping you find the
                  right fit and style. We believe that shopping should be an
                  enjoyable and stress-free experience, and our team is
                  committed to making that a reality for you. Whether you need
                  advice on the latest trends or assistance in finding the
                  perfect pair for any occasion, we are here to help. Visit us
                  and let us enhance your sneaker shopping experience with our
                  exceptional service.
                </p>
              </article>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Our store is not just about offering high-quality sneakers; we
                  are also committed to sustainability and ethical practices. We
                  proudly feature brands like Veja, known for their eco-friendly
                  production methods and fair-trade practices. By choosing to
                  shop with us, you are supporting a greener and more ethical
                  fashion industry. Our commitment to sustainability means you
                  can feel good about your purchase, knowing it has a positive
                  impact on the environment and the people who produce these
                  products. Join us in making a difference through conscious
                  fashion choices.
                </p>

                <p>
                  Located in the vibrant city of Copenhagen, our store is easily
                  accessible and designed to provide a welcoming and inspiring
                  shopping environment. The city’s rich culture and modern vibe
                  are reflected in our store’s aesthetic, making it a
                  destination for both locals and tourists. Our prime location
                  allows you to explore the best of sneaker fashion while
                  enjoying the unique charm of Copenhagen. Whether you are a
                  sneaker enthusiast or simply looking to update your style, our
                  store offers a unique shopping experience that combines
                  convenience with cutting-edge fashion.
                </p>
              </article>
            </div>
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src={storeImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default MainContent;
