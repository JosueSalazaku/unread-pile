import React, { useEffect } from 'react';
import Booklist from '../Components/Booklist';
import { useSearch } from '../Components/SearchContext';
const Search = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  // Ensure that the searchQuery is set when the component mounts
  useEffect(() => {
    setSearchQuery(searchQuery);
  }, [searchQuery, setSearchQuery]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="py-8 items-center font-bold text-2xl md:text-3xl lg:text-4xl">
        {`Search results for "${searchQuery}"`}
      </h2>
      <Booklist />
    </div>
  );
};

export default Search;
