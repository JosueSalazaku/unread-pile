import { useAppSearch } from "./AppSearchContext";

const Booklist = () => {
  const { books, loading, resultTitle, searchInput } = useAppSearch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!books.length && searchInput) {
    return <p>No books Found.</p>;
  }

  if (!books.length && !searchInput) {
    return <p>Start looking for books</p>;
  }

  return (
    <div className="w-screen flex flex-col justify-center items-center ">
      <h2 className="py-10 items-center font-bold text-xl">{resultTitle}</h2>
      <ul className="flex flex-col">
        {books.map((book) => (
          <li
            className="flex flex-row justify-evenly border m-4 rounded-md px-10 py-8 dark:text-white"
            key={book.key}
          >
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Cover of ${book.title}`}
                className="py-5"
              />
            )}
            <div className="px-10 py-5">
              <h3 className="font-bold py- text-xl dark:text-white">
                {" "}
                {book.title}
              </h3>
              <p>
                {" "}
                {book.author_name ? book.author_name.join(".") : "Unknown"}
              </p>
              <p>Pages: {book.number_of_pages ? book.number_of_pages : "Unknown"}</p>
              <select className="rounded-md p-0.5 mt-20 bg-gray-500 text-white dark:bg-gray-500 dark:text-white"
              >
                <option value="">To Read</option>
                <option value="">Read</option>
                <option value="">Currently Reading</option>
                <option value="">Did not finish</option>
                <option value="">Remove Book</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
