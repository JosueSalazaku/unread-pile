// AppSearchContext.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://openlibrary.org/search.json?title=";

const AppSearchContext = React.createContext();

const AppSearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("harry potter"); // Set a default search term
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Use searchInput for the API request
        const response = await axios.get(URL + searchInput);
        const { docs, numFound } = response.data;

        setBooks(docs);
        setResultTitle(`Results for "${searchInput}" (${numFound} books found)`);
        setLoading(false);

        // Log the fetched data to the console
        console.log("Fetched Data:", docs);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchInput]); // Dependency array changed to watch searchInput

  return (
    <AppSearchContext.Provider
      value={{ searchInput, setSearchInput, books, loading, resultTitle }}
    >
      {children}
    </AppSearchContext.Provider>
  );
};

export { AppSearchContext, AppSearchProvider };
