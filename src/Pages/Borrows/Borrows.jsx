import { useContext, useEffect, useRef, useState } from 'react';
import BorrowRow from './BorrowRow';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Borrows = () => {
  const { user } = useContext(AuthContext);
  const [borrows, setBorrows] = useState([]);

  const { _id, quantity, title } = borrows;
  const dialogRef = useRef();
  const axiosSecure = useAxiosSecure();

  const url = `/borrows?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setBorrows(res.data));
  }, [url, axiosSecure]);


  const handleReturn = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Returned successfully!',
          icon: 'success',
          confirmButtonText: 'Great!',
        }).then((secondResult) => {
          if (secondResult.isConfirmed) {
            fetch(`https://boipoka-server.vercel.app/borrows/${id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);

                const addQuantity = quantity + 1;
                if (data.deletedCount > 0) {
                  fetch(`https://boipoka-server.vercel.app/books/${title}`, {
                    method: 'GET',
                    headers: {
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify({ quantity: addQuantity }),
                  })
                    .then((res) => res.json())
                    .then((updateData) => {
                      console.log(updateData);
                    });
                  // dialogRef.current.close();

                  const remaining = borrows.filter(
                    (borrow) => borrow._id !== id
                  );
                  setBorrows(remaining);
                }
              });
          }
        });
      }
    });
  };


  return (
    <div>
      <div className="overflow-x-auto w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold h-screen pt-28 dark:text-slate-50">My Borrowed Books</h1>

        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Book</th>
              <th>Borrow date</th>
              <th>Return date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {borrows.map((borrow) => (
              <BorrowRow
                key={borrow._id}
                borrow={borrow}
                handleReturn={handleReturn}
              ></BorrowRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Borrows;
