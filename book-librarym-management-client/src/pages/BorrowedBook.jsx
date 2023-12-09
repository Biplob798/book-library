import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BorrowBookRow from "../components/BorrowBookRow";
import Swal from "sweetalert2";

const BorrowedBook = () => {
  const { user } = useContext(AuthContext);

  const url = `  https://book-library-management-server.vercel.app/borrowBook?email=${user?.email}`;

  const [borrowBook, setBorrowBook] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBorrowBook(data));
  }, [url]);

  const handleReturnBook = (id) => {
    const proceed = confirm("Are You Sure Want To Return");
    if (proceed) {
      fetch(
        `  https://book-library-management-server.vercel.app/borrowBook/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your Return has been saved",
              showConfirmButton: false,
              timer: 1500,
            });

            const remaining = borrowBook.filter(
              (borrowBooks) => borrowBooks._id !== id
            );
            setBorrowBook(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-2xl">Your Borrow Book List : {borrowBook.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>image</th>
              <th>name</th>
              <th>category</th>
              <th>returnDate</th>
              <th>borrowBook</th>
            </tr>
          </thead>
          <tbody>
            {borrowBook.map((borrowBook) => (
              <BorrowBookRow
                key={borrowBook._id}
                borrowBook={borrowBook}
                handleReturnBook={handleReturnBook}
              ></BorrowBookRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowedBook;
