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
    <div className="h-20 flex flex-row md:flex-row text-black justify-between items-center relative">
      <div className="flex items-center">
        <Link to="/Home" className="font-bold ml-8 text-4xl">
          Unread Pile
        </Link>
      </div>

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
        className={`md:hidden mt-12 text-black text-6xl space-y-16 absolute top-20 right-0 left-0 items-center z-50  ${
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
      <ul className="hidden md:flex space-x-5 mx-8 font-extrabold">
        {routes.map((route) => (
          <li className="my-3" key={route.to}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>

      {/* Navigation Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-75 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
