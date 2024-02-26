import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ routes }) => {
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
          <img src="src/assets/books-stack-of-three-svgrepo-com.svg" alt=""  className="h-12 "/>
        </Link>
      </div>

      <input type="text" name="" id="" className="border-2 border-black p-2 text-xl w-80 h-10 rounded-lg" />

      {/* Hamburger Icon */}
      <div
        className="cursor-pointer md:hidden flex flex-row space-x-2 mr-5"
        onClick={toggleMenu}
      >
        <div
          className={`h-6 w-0.5 bg-black mb-1 transition-transform transform ${
            menuOpen ? "rotate-45" : "rotate-0"
          }`}
        ></div>
        <div
          className={`h-6 w-0.5 bg-black mb-1 transition-opacity ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-6 w-0.5 bg-black transition-transform transform ${
            menuOpen ? "-rotate-45" : "rotate-0"
          }`}
        ></div>
      </div>

      {/* Mobile Navigation Items */}
      <ul
        className={`md:hidden mt-12 text-black text-6xl space-y-16 ml-10 absolute top-20 right-0 left-0 items-center z-50  ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {routes.map((route) => (
          <li className="my-3" key={route.to} onClick={closeMenu}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Navigation Items */}
      <ul className="hidden md:flex space-x-14 mx-8 mr-24 text-xl font-extrabold">
        {routes.map((route) => (
          <li className="my-5" key={route.to}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>

      {/* Navigation Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 transition  bg-white z-40"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
