import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Modal = () => {
  const { user } = useContext(AuthContext);
  const handleBorrowBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const returnDate = form.returnDate.value;
    const borrowDate = form.borrowDate.value;
    const name = form.name.value;
    const email = user?.email;

    const borrowBook = {
      returnDate,
      borrowDate,
      name,
      email,
    };
    console.log(borrowBook);

    // send data to the server product
    fetch("   https://book-library-management-server.vercel.app/borrowBook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrowBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Borrow Book successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="flex justify-around items-center py-4 gap-4 border">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-outline bg-[#ea580c] text-white"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Borrow Book
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="space-y-4">
              <h2>Return Date</h2>{" "}
            </div>
            <div className="modal-action ">
              <form onSubmit={handleBorrowBook} className="space-y-6 ">
                {/* if there is a button in form, it will close the modal */}

                <label className="label">
                  <span className="label-text text-white font-sm text-xl">
                    Return date
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="returnDate"
                    placeholder="Return date"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="label">
                  <span className="label-text text-white font-sm text-xl">
                    Borrow date
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="borrowDate"
                    placeholder="Borrow date"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    defaultValue={user?.displayName}
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    defaultValue={user?.email}
                    className="input input-bordered w-full"
                  />
                </label>
                <div className="flex justify-between gap-4">
                  <button className="btn">Submit</button>
                  <Link to="/borrowedBook">
                    <button className="btn">Back</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </dialog>
        <button className=" btn btn-outline bg-[#ea580c] text-white">
          Read Book
        </button>{" "}
      </div>
    </div>
  );
};

export default Modal;
