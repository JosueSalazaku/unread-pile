import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Browse from "./Pages/Browse";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

const routes = [

  { to: "/Browse", label: "Browse" },
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
        <Route path="/Signin" element={<Signin />} />
        <Route path="Signup/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
