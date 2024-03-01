import SearchBar from "../Components/SearchBar";
import Booklist from "../Components/Booklist";

const Search = ({ darkMode }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
    <main
      className={`h-screen flex flex-col items-center text-black ${
        darkMode ? "dark" : ""
      } dark:bg-neutral-900 text-black`}
    >
      <SearchBar />
        <h1 className="text-6xl dark:text-white"></h1>
        <Booklist/>
      </main>
      </div>
  )
}

export default Search