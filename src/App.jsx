// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Browse from "./Pages/Browse";
import Search from "./Pages/Search";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Mybooks from "./Pages/Mybooks";
import Home from "./Pages/Home";
import { AppSearchProvider } from "/Users/josuesalazaku/Developer/BeCode/Summerpastures/unread-pile/src/Components/AppSearchContext.jsx";
import { SearchProvider } from "./Components/SearchContext";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const routes = [
    { to: "/Browse", label: "Browse" },
    { to: "/Mybooks", label: "My books" },
    // Remove the empty label for "/Search"
    { to: "/Signin", label: "Sign In" },
    { to: "/Signup", label: "Sign up" },
  ];

  return (
    <AppSearchProvider>
      <SearchProvider>
        <Router>
          <Navbar
            routes={routes}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <Routes>
            <Route path="/Home" element={<Home darkMode={darkMode} />} />
            <Route path="/Browse" element={<Browse darkMode={darkMode} />} />
            <Route path="/Search" element={<Search darkMode={darkMode} />} />
            <Route path="/Mybooks" element={<Mybooks darkMode={darkMode} />} />
            <Route path="/Signin" element={<Signin darkMode={darkMode} />} />
            <Route path="/Signup" element={<Signup darkMode={darkMode} />} />
          </Routes>
        </Router>
      </SearchProvider>
    </AppSearchProvider>
  );
};

export default App;
