import Booklist from '../Components/Booklist'
import SearchBar from '../Components/SearchBar'


const Browse = ({ darkMode }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
   <main className="h-full flex flex-col items-center  dark:text-white dark:bg-neutral-900">
      <SearchBar />
      <section>
      <Booklist/>
     </section>
    </main>
    </div>
  )
}

export default Browse
