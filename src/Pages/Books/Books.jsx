import { useLoaderData, useParams } from 'react-router-dom';
import BookCard from './BookCard';
import { useEffect, useState } from 'react';

const Books = () => {
  const { genre } = useParams();

  const loadedBooks = useLoaderData();
  const [books, setBooks] = useState(loadedBooks);
  const genreBook = books.filter(
    (book) => book.genre?.toLowerCase() == genre?.toLocaleLowerCase()
  );

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
      ) : genreBook.length ? (
        <div>
          <h1 className="text-2xl font-semibold mt-32 mb-4 text-center">
            Popular {genre} books
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            {genreBook.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                books={books}
                setBooks={setBooks}
              ></BookCard>
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

export default Books;
