const GenreCard = ({ genre }) => {
  const { genreName, imgUrl } = genre || {};
  // const imageUrl =
  //   'https://www.svgrepo.com/show/419182/heart-love-marriage-21.svg';

  return (
    <div>
      <div className="card w-48 h-40 shadow-md rounded bg-red-100 relative">
        <figure>
          <img src={imgUrl} className="w-32 ml-7" alt="" />
        </figure>
        <h1 className="absolute left-2 top-32">{genreName}</h1>
      </div>
    </div>
  );
};

export default GenreCard;
