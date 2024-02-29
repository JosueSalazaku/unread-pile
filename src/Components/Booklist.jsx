// Booklist.jsx

import React from 'react';
import { useAppSearch } from './AppSearchContext';

const Booklist = () => {
  const { books, loading, resultTitle, searchInput, loadMoreBooks } = useAppSearch();

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
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="py-8 items-center font-bold text-2xl md:text-3xl lg:text-4xl">
        {resultTitle}
      </h2>
      <ul className="flex flex-col">
        {books.map((book) => (
          <li
            key={book.id}
            className="flex flex-col md:flex-row justify-evenly border m-4 md:rounded-md py-3 dark:text-white"
          >
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`Cover of ${book.volumeInfo.title}`}
                className="w-32 h-48 mx-5 md:w-48 md:h-64 lg:w-48 lg:h-72 py-5"
              />
            )}
            <div className="mx-4 md:px-10 py-5">
              <h3 className="font-bold text-md md:text-lg lg:text-xl dark:text-white">
                {book.volumeInfo.title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(', ')
                  : 'Unknown'}
              </p>
              <p className="text-sm md:text-base lg:text-lg">
                Pages: {book.volumeInfo.pageCount || 'Unknown'}
              </p>
              {/* <p>{book.volumeInfo.description || 'No description available.'}</p> */}
              <select className="rounded-md p-0.5 mt-4 md:mt-6 bg-gray-500 text-white dark:bg-gray-500 dark:text-white">
                <option value="" className="bg-green-500">
                  To Read
                </option>
                <option value="" className="bg-cyan-500">
                  Read
                </option>
                <option value="">Currently Reading</option>
                <option value="">Did not finish</option>
                <option value="" className="bg-red-500">
                  Remove Book
                </option>
              </select>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={loadMoreBooks} className="bg-blue-500 ml-5 text-white p-2 rounded-xl mt-4">
        Load More
      </button>
    </div>
  );
};

export default Booklist;
