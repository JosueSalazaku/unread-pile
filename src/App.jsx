// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Browse from "./Pages/Browse";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Mybooks from "./Pages/Mybooks";
import Home from "./Pages/Home";
import { AppSearchProvider } from "./Components/AppSearchContext";
import SearchBar from "./Components/SearchBar";

const routes = [
  { to: "/Browse", label: "Browse" },
  { to: "/Mybooks", label: "My books" },
  { to: "/Signin", label: "Sign In" },
  { to: "/Signup", label: "Sign up" },
];

function App() {
  return (
    <AppSearchProvider>
      <Router>
        <Navbar routes={routes} />
        <Routes>
          <Route
            path="/Home"
            element={
              <>
                <Home />
                <SearchBar />
              </>
            }
          />
          <Route
            path="/Browse"
            element={
              <>
                <Browse />
                <SearchBar />
              </>
            }
          />
          <Route
            path="/Mybooks"
            element={
              <>
                <Mybooks />
                <SearchBar />
              </>
            }
          />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </AppSearchProvider>
  );
}

export default App;
