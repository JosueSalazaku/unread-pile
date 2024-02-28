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
        <div >
            <h2 className="py-10">{resultTitle}</h2>
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.key}>
                             {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Cover of ${book.title}`} className="py-5" />}
                            <h3 className="font-bold py- text-xl">Title: {book.title}</h3>
                            <p>Author: {book.author_name ? book.author_name.join(".") : "Unknown"}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Booklist;
