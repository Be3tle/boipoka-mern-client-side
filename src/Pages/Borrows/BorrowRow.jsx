const BorrowRow = ({ borrow, handleReturn }) => {
  const { _id, borrowDate, returnDate, bookName, img, status } = borrow;

  return (
    <tr>
      <th></th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} alt="" />}
          </div>
        </div>
      </td>
      <td>{bookName}</td>
      <td>{borrowDate}</td>
      <td>{returnDate}</td>
      <th>
        <button onClick={() => handleReturn(_id)} className="btn bg-violet-400">
          Return
        </button>
      </th>
    </tr>
  );
};

export default BorrowRow;
