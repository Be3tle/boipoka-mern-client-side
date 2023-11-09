import { useContext, useEffect, useState } from 'react';
import BorrowRow from './BorrowRow';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Borrows = () => {
  const { user } = useContext(AuthContext);
  const [borrows, setBorrows] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/borrows?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setBorrows(res.data));
  }, [url, axiosSecure]);

  const handleReturn = (id) => {
    fetch(`https://boipoka-server.vercel.app/borrows/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = borrows.filter((borrow) => borrow._id !== id);
          const updated = borrows.find((borrow) => borrow._id === id);
          updated.status = 'confirm';
          const newBorrows = [updated, ...remaining];
          setBorrows(newBorrows);
        }
      });
  };

  const handleReturn2 = (id) => {
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
                if (data.deletedCount > 0) {
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
        <h1 className="text-2xl font-bold mt-16 mb-20">My Borrowed Books</h1>

        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
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
                handleReturn2={handleReturn2}
              ></BorrowRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Borrows;
