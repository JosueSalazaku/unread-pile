
import Booklist from '../Components/Booklist'
import SearchBar from '../Components/SearchBar'
const Browse = () => {
  return (
    <main className='flex flex-col items-center'>
      <SearchBar />
      <section>
      <Booklist/>
     </section>
    </main>
  )
}

export default Browse
