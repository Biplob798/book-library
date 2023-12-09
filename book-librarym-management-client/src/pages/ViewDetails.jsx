import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const loadedViewDetailsBook = useLoaderData();
  console.log(loadedViewDetailsBook);

  const { _id, image, category } = loadedViewDetailsBook;

  const { user } = useContext(AuthContext);
  const handleBorrowBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const returnDate = form.returnDate.value;
    const borrowDate = form.borrowDate.value;
    const name = form.name.value;
    const email = user?.email;

    const borrowBook = {
      image,
      category,
      book_id: _id,
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
        if (data?.insertedId) {
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
      <div>
        {/* category product  */}
        <div className="card p-6 bg-white shadow-md ">
          <figure className="px-10 pt-10   border">
            <img
              src={image}
              alt="categoryName"
              className="rounded-x w-full h-56"
            />
          </figure>
          <hr className="mt-6 " />

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
                      {" "}
                      <button className="btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
            <Link to={`/readBook/${_id}`}>
              {" "}
              <button className=" btn btn-outline bg-[#ea580c] text-white">
                Read Book
              </button>{" "}
            </Link>
          </div>
          <div className="card-body  text-center  shadow-md ">
            <p className="text-medium text-left font-light text-black ">
              A library is a treasure trove of knowledge, a sanctuary for book
              enthusiasts, and a hub of intellectual exploration. In its
              essence, a library is more than just a physical space filled with
              books; it is a vibrant hub that fosters learning, creativity, and
              community engagement. Within the walls of a library, one can
              discover a vast collection of books spanning various genres, from
              timeless classics and contemporary literature to academic texts
              and research journals. These books serve as windows to different
              worlds, offering readers the opportunity to explore diverse
              cultures, historical events, scientific discoveries, and
              imaginative realms. Libraries play a pivotal role in education,
              providing resources for students, researchers, and lifelong
              learners. They offer access to a wide array of informational
              materials, including digital resources, audiobooks, and multimedia
              content, catering to different learning preferences. Moreover,
              libraries often host workshops, lectures, and book clubs,
              fostering a sense of camaraderie among readers and encouraging
              intellectual discussions. Beyond their educational significance,
              libraries serve as community hubs, promoting social interaction
              and cultural enrichment. They provide a safe and quiet space for
              studying, research, and personal reflection. Additionally,
              libraries often organize events, art exhibitions, and storytelling
              sessions for children, making them inclusive spaces for people of
              all ages. In the digital age, many libraries have embraced
              technology, offering online catalogs, e-books, and virtual
              services, ensuring that knowledge is accessible to a broader
              audience. Librarians, the unsung heroes of libraries, assist
              patrons in finding relevant resources, conducting research, and
              navigating the vast world of information. Ultimately, a library is
              a beacon of enlightenment, fostering a love for reading, nurturing
              curiosity, and promoting lifelong learning. It stands as a
              testament to the power of words, ideas, and the enduring
              importance of education in shaping a well-informed society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
