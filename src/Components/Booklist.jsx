import React from 'react';
import { useAppSearch } from './AppSearchContext';

const Booklist = () => {
  const { books, loading, resultTitle, searchInput } = useAppSearch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!books.length && searchInput) {
    return <p>No books found.</p>;
  }

  if (!books.length && !searchInput) {
    return <p>Start looking for books</p>;
  }

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h2 className="py-10 items-center font-bold text-md">{resultTitle}</h2>
      <ul className="flex flex-col">
        {books.map((book) => (
          <li
            className="flex flex-row justify-evenly border m-4 rounded-md px-10 py-8 dark:text-white"
            key={book.id}
          >
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`Cover of ${book.volumeInfo.title}`}
                className="h-96 py-5"
              />
            )}
            <div className="px-10 py-5">
              <h3 className="font-bold py- text-md dark:text-white">
                {book.volumeInfo.title}
              </h3>
              <p>
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(', ')
                  : 'Unknown'}
              </p>
              <p>Pages: {book.volumeInfo.pageCount || 'Unknown'}</p>
              {/* <p>{book.volumeInfo.description || 'No description available.'}</p> */}
              <select className="rounded-md p-0.5 mt-20 bg-gray-500 text-white dark:bg-gray-500 dark:text-white">
                <option value="" className='bg-green-500'>To Read</option>
                <option value="" className='bg-cyan-500'>Read</option>
                <option value="">Currently Reading</option>
                <option value="">Did not finish</option>
                <option value="" className='bg-red-500'>Remove Book</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
