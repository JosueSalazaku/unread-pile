import SearchBar from "../Components/SearchBar"

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <SearchBar/>
          <h1 className="text-6xl">Find your Books</h1>
    </main>
  )
}

export default Home