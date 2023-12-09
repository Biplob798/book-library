import Swal from "sweetalert2";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const author = form.author.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const addBooks = {
      name,
      quantity,
      description,
      author,
      category,
      rating,
      photo,
    };
    console.log(addBooks);

    // send data to the server product
    fetch("   https://book-library-management-server.vercel.app/addBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addBooks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Book added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="my-12 p-8 bg-white border shadow-md max-w-2xl mx-auto">
        <h2 className="text-3xl text-black font-medium text-center p-6">
          Add Book
        </h2>
        <hr className="mb-6" />

        <form onSubmit={handleAddBook} className="space-y-6">
          {/* form Book name */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black font-sm text-xl">
                Book name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Book name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form for Quantity of book */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black font-sm text-xl">
                Quantity of book
              </span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form short description  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black font-sm text-xl">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short description"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Author name  */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black font-sm text-xl">
                Author name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="author"
                placeholder="author name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Book Type  */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black font-sm text-xl">
                Book category
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Book Rating row  */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black font-sm text-xl">
                  Rating
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Book photo url row  */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black font-sm text-xl">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Book"
            className="b btn btn-outline bg-green-900 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBook;
