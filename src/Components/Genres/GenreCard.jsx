import { Link } from 'react-router-dom';

const GenreCard = ({ genre }) => {
  const { genreName, imgUrl } = genre || {};

  return (
    <div>
      <Link to={`/books/${genreName}`} state={genreName}>
        <div className="card w-48 h-40 shadow-md rounded bg-violet-300 relative">
          <figure>
            <img src={imgUrl} className="w-32 ml-7" alt="" />
          </figure>
          <h1 className="absolute left-2 top-32">{genreName}</h1>
        </div>
      </Link>
    </div>
  );
};

export default GenreCard;
