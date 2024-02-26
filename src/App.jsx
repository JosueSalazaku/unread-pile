import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Browse from "./Pages/Browse";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

const routes = [
  { to: "/", label: "" },
  { to: "/Browse", label: "Browse" },
  { to: "/Signin", label: "Signin" },
];

function App() {
  return (
    <Router>
      <Navbar routes={routes} />
      <Routes>
        <Route path="/#" element={<home/>} />
        <Route path="/Browse" element={<Browse/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="Signup/" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;