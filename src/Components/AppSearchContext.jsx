import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = import.meta.env.REACT_APP_API_KEY;
const MAX_RESULTS = 40;

const AppSearchContext = React.createContext();

const AppSearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          key: API_KEY,
          q: searchInput,
          startIndex: startIndex,
          maxResults: MAX_RESULTS,
        },
      });

      const { items, totalItems } = response.data;

      setBooks(items);
      setResultTitle(
        `Results for "${searchInput}" (${totalItems} books found)`
      );
      setSearchResults(items);
      setLoading(false);

      console.log("Fetched Data:", items);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts and when the searchInput changes
    handleSearch();
  }, [searchInput]); // Trigger when searchInput changes

  // Function to load more books
  const loadMoreBooks = () => {
    setStartIndex((prevIndex) => prevIndex + MAX_RESULTS);
  };

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
        loadMoreBooks,
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
