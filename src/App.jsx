import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "/Components/Navbar";

const routes = [
  { to: "/", label: "" },
  { to: "/Browse", label: "Browse" },
  { to: "/", label: "`" },
];

function App() {
  return (
    <Router>
      <Navbar routes={routes} />
      <Routes>
        <Route path="/" element={< />} />
        <Route path="/" element={< />} />
        <Route path="/" element={< />} />
        <Route path="/" element={< />} />
      </Routes>
    </Router>
  );
}

export default App;