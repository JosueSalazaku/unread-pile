import { useAppSearch } from "./AppSearchContext";

const Booklist = () => {
    const { books, loading, resultTitle } = useAppSearch();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!books.length) {
        return <p>No books Found.</p>
    }

    return (
        <div className="w-screen flex flex-col justify-center items-center " >
            <h2 className="py-10 items-center font-bold text-xl">{resultTitle}</h2>
            <ul className="flex flex-col">
                {books.map((book) => {
                    return (
                        <li className="flex flex-row justify-evenly border m-4 rounded-md px-10 py-8 dark:text-white" key={book.key}>
                             {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Cover of ${book.title}`} className="py-5" />}
                            <div className="px-10 py-5">
                                <h3 className="font-bold py- text-xl dark:text-white"> {book.title}</h3>
                                <p>Author: {book.author_name ? book.author_name.join(".") : "Unknown"}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Booklist;
