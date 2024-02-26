import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppSearchContext } from "../AppSearchContext";

const Navbar = ({ routes }) => {
  const { searchInput, setSearchInput } = useContext(AppSearchContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="h-28 flex flex-row md:flex-row text-black justify-between items-center relative">
      <div className="flex items-center">
        <Link to="/Home" className="font-bold ml-8 text-4xl">
          <img src="src/assets/books-stack-of-three-svgrepo-com.svg" alt="" className="h-12 py-1" />
        </Link>
      </div>

            {/* Input for search */}
            <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full rounded-xl h-10 p-4  text-sm text-black border-2 border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="text-white absolute end-2.5 bottom-0.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 ml-10 py-2">
          <img src="src/assets/search-svgrepo-com.svg" alt="" className="h-5" />
        </button>
      </div>

      {/* Hamburger Icon for screens below 1130px */}
      <div className="cursor-pointer md:hidden flex flex-row space-x-2 mr-5" onClick={toggleMenu}>
        <div className={`h-6 w-0.5 bg-black mb-1 transition-transform transform ${menuOpen ? "rotate-45" : "rotate-0"}`}></div>
        <div className={`h-6 w-0.5 bg-black mb-1 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></div>
        <div className={`h-6 w-0.5 bg-black transition-transform transform ${menuOpen ? "-rotate-45" : "rotate-0"}`}></div>
      </div>

      {/* Mobile Navigation Items */}
      <ul className={`md:hidden mt-12 text-black text-6xl space-y-16 ml-10 absolute top-20 right-0 left-0 items-center z-50 ${menuOpen ? "block" : "hidden"}`}>
        {routes.map((route) => (
          <li className="my-3" key={route.to} onClick={closeMenu}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>



      {/* Desktop Navigation Items for screens above 1130px */}
      <ul className="hidden md:flex space-x-14 mx-8  text-md font-semibold lg:flex">
        {routes.map((route) => (
          <li className="my-5" key={route.to}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <div className="fixed inset-0 transition bg-white z-40" onClick={closeMenu}></div>
      )}
    </div>
  );
};

export default Navbar;
