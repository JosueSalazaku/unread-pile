import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Components/Navbar";
import Browse from "./Pages/Browse";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Mybooks from "./Pages/Mybooks";
import Home from "./Pages/Home";

const routes = [

  { to: "/Browse", label: "Browse" },
  { to: "/Mybooks", label: "My books" },
  { to: "/Signin", label: "Sign In" },
  { to: "/Singup", label: "Sign Up" },
];

function App() {
  return (
    <Router>
      <Navbar routes={routes} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Mybooks" element={<Mybooks />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="Signup/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
