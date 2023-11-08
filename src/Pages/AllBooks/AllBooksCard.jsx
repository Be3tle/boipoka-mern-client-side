import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

import { Link } from 'react-router-dom';

const AllBooksCard = ({ book }) => {
  const { _id, title, genre, author, rating, imgUrl } = book;

  return (
    <div className="card w-56 bg-violet-100 shadow-sm p-4 rounded-md">
      <figure>
        <img src={imgUrl} className="w-32 rounded-sm" alt="book" />
      </figure>
      <div className="">
        <h2 className="text-lg font-semibold mt-3">{title}</h2>
        {/* use rating here */}
        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
        <div className="my-2">
          <p className="font-medium">{author}</p>
          <p>{genre}</p>
        </div>

        <div className=" card-actions justify-center mt-2">
          <Link to={`/update/${_id}`}>
            <button className=" flex items-center justify-center w-full py-2 px-16 font-semibold rounded-md bg-violet-400 text-white">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllBooksCard;
