const BorrowRow = ({ borrow, handleReturn2, handleReturn }) => {
  const { _id, borrowDate, returnDate, bookName, img, status } = borrow;

  return (
    <tr>
      <th></th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{bookName}</td>
      <td>{borrowDate}</td>
      <td>{returnDate}</td>
      <th>
        <button
          onClick={() => handleReturn2(_id)}
          className="btn bg-violet-400 btn-sm"
        >
          Return
        </button>
      </th>
    </tr>
  );
};

export default BorrowRow;
