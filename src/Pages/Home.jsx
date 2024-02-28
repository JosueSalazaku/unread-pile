import SearchBar from "../Components/SearchBar"

const Home = () => {
  return (
    <main className="h-screen flex flex-col items-center dark:bg-neutral-900">
      <SearchBar/>
          <h1 className="text-6xl dark:text-white">Find your Books</h1>
    </main>
  )
}
export default Home