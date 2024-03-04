import React, { useEffect } from 'react';
import Booklist from '../Components/Booklist';
import { useSearch } from '../Components/SearchContext';
import SearchBar from '../Components/SearchBar';

const Search = ({ darkMode }) => { 
  const { searchQuery, setSearchQuery } = useSearch();

  useEffect(() => {
    // Avoid unnecessary state updates when searchQuery is undefined
    if (searchQuery !== undefined) {
      setSearchQuery(searchQuery);
    }
  }, [searchQuery, setSearchQuery]);

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className={`h-screen flex flex-col items-center text-black ${ darkMode ? "dark" : ""} dark:bg-neutral-900 text-black`}>
        <SearchBar />
        {searchQuery !== undefined && (
          <h1 className="text-6xl dark:text-white">{`Search results for "${searchQuery}"`}</h1>
        )}
        <Booklist />
      </main>
    </div>
  );
};

export default Search;
