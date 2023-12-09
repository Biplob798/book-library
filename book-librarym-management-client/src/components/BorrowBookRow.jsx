import PropTypes from "prop-types";

const BorrowBookRow = ({ borrowBook, handleReturnBook }) => {
  const { _id, name, image, category, returnDate, borrowDate } = borrowBook;

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{returnDate}</td>
      <td>{borrowDate}</td>
      <th>
        <button
          onClick={() => handleReturnBook(_id)}
          className="btn btn-ghost btn-xs"
        >
          Return
        </button>
      </th>
    </tr>
  );
};

export default BorrowBookRow;
BorrowBookRow.propTypes = {
  borrowBook: PropTypes.object,
};
