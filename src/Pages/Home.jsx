import Booklist from "../Components/Booklist";
import SearchBar from "../Components/SearchBar";

const Home = ({ darkMode }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
    <main
      className={`h-screen flex flex-col items-center text-black ${
        darkMode ? "dark" : ""
      } dark:bg-neutral-900 text-black`}
    >
      <SearchBar />
        <h1 className="text-6xl dark:text-white">Find your Books</h1>
        <Booklist/>
      </main>
      </div>
  );
};

export default Home;
