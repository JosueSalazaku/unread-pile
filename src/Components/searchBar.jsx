import { useContext } from "react";
import { AppSearchContext } from "./AppSearchContext";

const SearchBar = () => {
  const { searchInput, setSearchInput, handleSearch } =
    useContext(AppSearchContext);

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative flex h-32 items-center">
      <input
        type="search"
        id="search"
        className="w-80 rounded-l-2xl h-10 p-2 text-sm text-black border-t-2 border-b-2 border-l-2 border-r-0 border-black dark:bg-neutral-700 border-2 dark:border-gray-500 dark:text-white"
        placeholder="Search"
        required
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={handleKeypress}
      />
      <button
        onClick={handleSearch}
        className="border-t-2 border-b-2 border-r-2 border-l-0 rounded-r-2xl p-2 border-black dark:bg-neutral-700 border-2 dark:border-gray-500"
      >
        <img src="src/assets/search-svgrepo-com.svg" alt="" className="h-5" />
      </button>
    </div>
  );
  
  
};

export default SearchBar;
