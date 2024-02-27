import { normalizePath } from "vite";
import { useAppSearch } from "./AppSearchContext";

const Booklist = () => {
    const { books, loading, resultTitle } = useAppSearch;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!books.lenght) {
        return <p>No books Found.</p>
    }
}

export default Booklist