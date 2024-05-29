import {
  FaHeart,
  FaShippingFast,
  FaStar,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";

import React from "react";

const RegisterBanner = () => {
  return (
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-green via-blue to-orange animate-gradient flex justify-center flex-col items-center">
        <h2 className="text-4xl font-extrabold text-white mb-8 animate-fade-in hidden lg:block">
          Why Join Us?
        </h2>
        <ul className="text-white hidden lg:block space-y-6">
          <li className="text-xl flex items-center animate-fade-in-up delay-100">
            <FaStar className="mr-3 text-2xl" /> Exclusive Access
          </li>
          <li className="text-xl flex items-center animate-fade-in-up delay-200">
            <FaUser className="mr-3 text-2xl" /> Personalized Recommendations
          </li>
          <li className="text-xl flex items-center animate-fade-in-up delay-300">
            <FaTachometerAlt className="mr-3 text-2xl" /> Faster Checkout
          </li>
          <li className="text-xl flex items-center animate-fade-in-up delay-400">
            <FaShippingFast className="mr-3 text-2xl" /> Order Tracking
          </li>
          <li className="text-xl flex items-center animate-fade-in-up delay-500">
            <FaHeart className="mr-3 text-2xl" /> Wishlist and Favorites
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RegisterBanner;
