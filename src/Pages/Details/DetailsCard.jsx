import { useContext, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const DetailsCard = ({ book }) => {
  const { _id, title, imgUrl, description, genre, quantity } = book || {};

  const currentDate = new Date().toISOString().split('T')[0];

  const { user } = useContext(AuthContext);
  const dialogRef = useRef();

  const [updatedQuantity, setUpdatedQuantity] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const readerName = form.name.value;
    const borrowDate = form.borrowDate.value;
    const returnDate = form.returnDate.value;

    const borrow = {
      email,
      readerName,
      borrowDate,
      returnDate,
      bookId: _id,
      bookName: title,
      genre,
      img: imgUrl,
    };

    console.log(borrow);

    // send data to server
    fetch('https://boipoka-server.vercel.app/borrows', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(borrow),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const newQuantity = quantity - 1;
        if (data.insertedId) {
          fetch(`https://boipoka-server.vercel.app/books/${_id}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({ quantity: newQuantity }),
          })
            .then((res) => res.json())
            .then((updateData) => {
              console.log(updateData);

              if (updateData.success == true) {
                Swal.fire({
                  title: 'Borrowed successfully!',
                  text: 'Do you want to continue?',
                  icon: 'success',
                  confirmButtonText: 'Sure!',
                });
                dialogRef.current.close();
              }
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
          <p>Available copies: {quantity}</p>
          <div className="card-actions">
            <Link to={`/read-more`}>
              <button className="btn bg-violet-400 px-5 py-3 ">Read</button>
            </Link>
            {quantity > 0 ? (
              <button
                onClick={() => dialogRef.current.showModal()}
                className="btn bg-violet-400 px-5 py-3"
              >
                Borrow
              </button>
            ) : (
              <button disabled className="btn bg-violet-400 px-5 py-3">
                Out of stock
              </button>
            )}

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_1" className="modal" ref={dialogRef}>
              <div className="modal-box">
                <div className="modal-action  flex flex-col justify-center items-center">
                  <h1 className="text-xl font-semibold py-2">
                    Pick a return date
                  </h1>
                  <form onSubmit={handleSubmit} method="dialog">
                    <div className="col-span-full sm:col-span-3 py-1">
                      <label className="text-sm">Email</label>
                      <input
                        name="email"
                        defaultValue={user?.email}
                        type="text"
                        placeholder="Email"
                        className="w-full rounded-md  border-gray-700 text-gray-900"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3 py-1">
                      <label className="text-sm">Name</label>
                      <input
                        name="name"
                        defaultValue={user?.displayName}
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-md border-gray-700 text-gray-900"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3 py-1">
                      <label className="text-sm">Borrow date</label>
                      <input
                        readOnly
                        name="borrowDate"
                        type="date"
                        defaultValue={currentDate}
                        className="w-full rounded-md border-gray-700 text-gray-900"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3 py-1">
                      <label className="text-sm">Return date</label>
                      <input
                        name="returnDate"
                        type="date"
                        className="w-full rounded-md border-gray-700 text-gray-900"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3 py-1">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn rounded-md w-full"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsCard;
