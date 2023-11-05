const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/premium-photo/old-cozy-library-game-light-shadow-shelves-with-books-library_245974-445.jpg?w=900)',
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="md:mr-72 text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-2xl p-7 font-medium md:p-0 md:mb-5 md:text-5xl md:font-semibold md:leading-snug">
              Unleash Your Imagination With Books
            </h1>

            <button className="btn bg-slate-950 text-white hover:bg-slate-900 border-0 font-normal m-7 md:m-0 text-sm md:mt-3">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
