import GenreCard from './GenreCard';

const Genres = () => {
  return (
    <div className="py-10 bg-red-50">
      <h1 className="text-center text-3xl font-normal py-7">Book Genres</h1>
      <div className="flex justify-center gap-7">
        <GenreCard></GenreCard>
        <GenreCard></GenreCard>
        <GenreCard></GenreCard>
        <GenreCard></GenreCard>
      </div>
    </div>
  );
};

export default Genres;
