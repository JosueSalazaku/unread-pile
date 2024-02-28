import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppSearchContext } from "./AppSearchContext";

const Navbar = ({ routes }) => {
  const { searchInput, setSearchInput, searchResults } =
    useContext(AppSearchContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }


  return (
    <div className="h-28 flex flex-row md:flex-row text-black justify-between items-center relative dark:bg-neutral-900">
      <div className="flex items-center">
        <Link
          to="/Home"
          className={"ml-8 text-2xl text-center font-extrabold dark:text-white"}
        >
          Unread <br /> Pile
        </Link>
      </div>

      {/* Hamburger Icon for screens below 1130px */}
      <div
        className="cursor-pointer md:hidden flex flex-row space-x-2 mr-32"
        onClick={toggleMenu}
      >
        <div
          className={`h-6 w-0.5 bg-black mb-1 transition-transform transform dark:bg-white ${
            menuOpen ? "rotate-45" : "rotate-0"
          }`}
        ></div>
        <div
          className={`h-6 w-0.5 bg-black mb-1 transition-opacity dark:bg-white ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-6 w-0.5 bg-black transition-transform transform dark:bg-white ${
            menuOpen ? "-rotate-45" : "rotate-0"
          }`}
        ></div>
      </div>

      {/* Dark Mode Toggle Button on small screens */}
      <button className="absolute w-10 h-10 rounded-full  bg-black dark:bg-white text-white top-0 right-0 mt-9 mr-10 md:hidden">DRK</button>

      {/* Mobile Navigation Items */}
      <ul
        className={`md:hidden mt-12 text-black text-6xl space-y-16 ml-10 absolute top-20 right-0 left-0 items-center z-50 dark:text-white ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {routes.map((route) => (
          <li className="my-3" key={route.to} onClick={closeMenu}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle Button on large screens */}
      <button className="absolute w-10 h-10 rounded-full bg-black dark:bg-white text-white top-0 right-0 mt-9 mr-10 hidden md:block">DRK</button>

      {/* Desktop Navigation Items for screens above 1130px */}
      <ul className="hidden md:flex space-x-14 mx-10 mr-32 text-md font-semibold lg:flex dark:text-white">
        {routes.map((route) => (
          <li className="my-5" key={route.to}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <div
          className="fixed inset-0 transition opacity-75 bg-white z-40 dark:bg-neutral-900"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
