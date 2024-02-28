import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const URL = "https://openlibrary.org/search.json?title=";

const AppSearchContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppSearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("harry potter"); // Set a default search term
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
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

  useEffect(() => {
    // Fetch data when the component mounts
    handleSearch();
  }, []); // Empty dependency array to trigger only on mount

  return (
    <AppSearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        books,
        loading,
        resultTitle,
        searchResults,
        handleSearch,
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

export { AppSearchContext, AppSearchProvider, useAppSearch };
