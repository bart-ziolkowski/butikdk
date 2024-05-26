import React, { useState } from "react";

import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 ms-4">
            <Link to={"/"} className="block w-full py-5">
              <img src={logoImage} alt="logo" className="dark:hidden" />
              <img src={logoImage} alt="logo" className="hidden dark:block" />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden bg-blue`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-beige dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-beige dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-beige dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/">Home</ListItem>
                  <ListItem NavLink="/about">About</ListItem>
                  <ListItem NavLink="/menu">Menu</ListItem>
                  <ListItem NavLink="/contact">Contact</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                to={"/login"}
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign in
              </Link>

              <Link
                to={"/register"}
                className="rounded-md bg-blue px-7 py-3 text-base font-medium text-beige hover:bg-primary/90 transition hover:bg-green"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({
  children,
  NavLink,
}: {
  children: React.ReactNode;
  NavLink: string;
}) => {
  return (
    <>
      <li>
        <Link
          to={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </Link>
      </li>
    </>
  );
};
