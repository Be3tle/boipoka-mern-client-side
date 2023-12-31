import { useEffect, useState } from 'react';
import GenreCard from './GenreCard';

const Genres = () => {
  const [genres, setGenres] = useState();

  useEffect(() => {
    fetch('https://boipoka-server.vercel.app/genre')
      .then((res) => res.json())
      .then((data) => {
        setGenres(data);
      });
  }, []);

  return (
    <div className="py-10 dark:bg-gray-800 bg-violet-50 flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl dark:text-violet-50 font-normal py-7">
        Book Genres
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {genres?.map((genre) => (
          <GenreCard key={genre._id} genre={genre}></GenreCard>
        ))}
      </div>
    </div>
  );
};

export default Genres;
