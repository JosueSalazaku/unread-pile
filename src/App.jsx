import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Browse from "./Pages/Browse";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Mybooks from "./Pages/Mybooks";
import Home from "./Pages/Home";
import { AppSearchProvider } from "/Users/josuesalazaku/Developer/BeCode/Summerpastures/unread-pile/src/Components/AppSearchContext.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const routes = [
    { to: "/Browse", label: "Browse" },
    { to: "/Mybooks", label: "My books" },
    { to: "/Signin", label: "Sign In" },
    { to: "/Signup", label: "Sign up" },
  ];

  return (
    <AppSearchProvider>
      <Router>
        <Navbar
          routes={routes}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route path="/Home" element={<Home darkMode={darkMode} />} />
          <Route path="/Browse" element={<Browse darkMode={darkMode} />} />
          <Route path="/Mybooks" element={<Mybooks darkMode={darkMode} />} />
          <Route path="/Signin" element={<Signin darkMode={darkMode} />} />
          <Route path="/Signup" element={<Signup darkMode={darkMode} />} />
        </Routes>
      </Router>
    </AppSearchProvider>
  );
};

export default App;
