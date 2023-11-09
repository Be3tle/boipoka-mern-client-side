import { useEffect, useState } from 'react';
import AllBooksCard from './AllBooksCard';

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://boipoka-server.vercel.app/books')
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
        setLoading(false);
      });
  }, []);

  const handleFilterToggle = () => {
    setShowAvailableOnly(!showAvailableOnly);
  };

  useEffect(() => {
    if (showAvailableOnly) {
      setFilteredBooks(allBooks.filter((book) => book.quantity > 0));
    } else {
      setFilteredBooks(allBooks);
    }
  }, [showAvailableOnly, allBooks]);

  return (
    <div className="flex justify-center items-center flex-col">
      {loading ? (
        <span className="loading loading-spinner loading-lg my-32"></span>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold my-20 text-center">
            Popular books
          </h1>
          <div className="mb-4">
            <button
              className={`btn ${showAvailableOnly ? 'btn-active' : ''}`}
              onClick={handleFilterToggle}
            >
              {showAvailableOnly ? 'Show All Books' : 'Show Available Books'}
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {filteredBooks.map((book) => (
              <AllBooksCard key={book._id} book={book}></AllBooksCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
