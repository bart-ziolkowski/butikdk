import React, { forwardRef } from "react";

import background_image from "../../assets/videos/background_video.mp4";
import heroImage from "../../assets/images/hero.png";

type HeroProps = {
  className?: string;
};

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ className }, ref) => {
  return (
    <div ref={ref} className={className}>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={background_image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      <div className="container flex flex-wrap p-8 mx-auto xl:px-0 lg:gap-10 lg:flex-nowrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <img alt="Benefits" src={heroImage} loading="lazy" />
          </div>
        </div>
        <div className="flex flex-wrap items-center w-full lg:w-1/2">
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Buy Your Next Sneakers With Us
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Welcome to our store, where style meets comfort and innovation.
                Browse our latest arrivals and experience the best in sneaker
                fashion! Here's why you'll love shopping with us:
              </p>
            </div>
            <div className="w-full mt-5">
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue rounded-md w-11 h-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-7 h-7 text-indigo-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Tailored to Your Taste
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Stay ahead of trends and find the sneakers that match your
                    unique style. Our wide selection guarantees something for
                    everyone.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue rounded-md w-11 h-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-7 h-7 text-indigo-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Attractive Prices and Early Access
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Enjoy unbeatable prices and early access to new releases.
                    Perfect for staying ahead in the sneaker game.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue rounded-md w-11 h-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-7 h-7 text-indigo-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Customer Satisfaction Guaranteed
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Our focus on quality and excellent service ensures you’ll be
                    a happy and loyal customer. Become part of our satisfied
                    sneaker community today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
