import Swal from 'sweetalert2';

const DetailsCard = ({ book }) => {
  const { id, title, imgUrl, description } = book || {};

  const handleBorrow = () => {
    const cartItem = { title, image };
    console.log(cartItem);

    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Added successfully!',
            text: 'Do you want to continue?',
            icon: 'success',
            confirmButtonText: 'Sure!',
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="card card-side w-1/2 bg-base-100 shadow-xl">
        <figure>
          <img src={imgUrl} className="p-3" alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn bg-violet-400 px-5 py-3 ">Read</button>
            <button className="btn bg-violet-400 px-5 py-3 ">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
