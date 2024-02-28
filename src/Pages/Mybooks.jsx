import SearchBar from "../Components/SearchBar";

const Mybooks = ({darkMode}) => {
  return (
    <>
       <div className={`${darkMode && "dark"}`}>   
   <main className="h-screen flex flex-col items-center dark:bg-neutral-900">
        <SearchBar />
        My books and reading stats
        </main>
        </div>
    </>
  );
};

export default Mybooks;
