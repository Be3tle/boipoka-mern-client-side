import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AllBooksCard from './AllBooksCard';

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      {loading ? (
        <span className="loading loading-spinner loading-lg my-32"></span>
      ) : allBooks.length ? (
        <div>
          <h1 className="text-2xl font-semibold my-20 text-center">
            Popular books
          </h1>
          <div className="grid md:grid-cols-3 gap-12">
            {allBooks.map((book) => (
              <AllBooksCard key={book._id} book={book}></AllBooksCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center my-32">
          <h1 className="text-xl font-medium">
            Books will be available soon. Thanks for having patience.
          </h1>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
