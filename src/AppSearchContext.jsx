// AppSearchContext.jsx
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const URL = "https://openlibrary.org/search.json?title=";

const AppSearchContext = React.createContext();

const AppSearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("harry potter"); // Set a default search term
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Use searchInput for the API request
        const response = await axios.get(URL + searchInput);
        const { docs, numFound } = response.data;

        setBooks(docs);
        setResultTitle(
          `Results for "${searchInput}" (${numFound} books found)`
        );
        setSearchResults(docs);
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
      value={{
        searchInput,
        setSearchInput,
        books,
        loading,
        resultTitle,
        searchResults,
      }}
    >
      {children}
    </AppSearchContext.Provider>
  );
};

const useAppSearch = () => {
  const context = useContext(AppSearchContext);
  if (!context) {
    throw new Error("useAppSearch must be used within an AppSearchProvider");
  }
  return context;
};

export { AppSearchContext, AppSearchProvider };
