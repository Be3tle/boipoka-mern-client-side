/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { _id, title, genre, author, rating, description, imgUrl } = book;

  return (
    <div className="card w-80 bg-base-100 shadow-xl p-5">
      <figure>
        <img src={imgUrl} className="w-48" alt="book" />
      </figure>
      <div className="">
        <div className="flex justify-between my-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p>{genre}</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-medium">{author}</p>
        </div>
        <p className="my-4">{description}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-center mt-4">
          <Link to={`/details/${_id}`}>
            <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white">
              Details
            </button>
          </Link>

          <Link to={`/update/${_id}`}>
            <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
