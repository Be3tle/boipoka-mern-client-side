import Heart from './heart.png';

const GenreCard = () => {
  return (
    <div>
      <div className="card w-48 h-40 shadow-md rounded bg-red-100 relative">
        <figure>
          <img src={Heart} className="w-32 ml-7" alt="" />
        </figure>
        <h1 className="absolute left-2 top-32">Romance</h1>
      </div>
    </div>
  );
};

export default GenreCard;
