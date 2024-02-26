// AppSearchContext.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://openlibrary.org/search.json?title=";

const AppSearchContext = React.createContext();

const AppSearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("The stranger");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(URL + searchTerm);
        const { docs, numFound } = response.data;
        setBooks(docs);
        setResultTitle(`Results for "${searchTerm}" (${numFound} books found)`);
        setLoading(false);

        // Log the fetched data to the console
        console.log("Fetched Data:", docs);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <AppSearchContext.Provider value={{ searchTerm, books, loading, resultTitle, setSearchTerm }}>
      {children}
    </AppSearchContext.Provider>
  );
};

export { AppSearchContext, AppSearchProvider };
