import SearchBar from "../Components/SearchBar";

const Home = ({ darkMode }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
    <main
      className={`h-screen flex flex-col items-center ${
        darkMode ? "dark" : ""
      } dark:bg-neutral-900 text-white`}
    >
      <SearchBar />
      <h1 className="text-6xl dark:text-white">Find your Books</h1>
      </main>
      </div>
  );
};

export default Home;
