import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const loadedUpdateBook = useLoaderData();
  console.log(loadedUpdateBook);
  const { _id, name, author, rating, category } = loadedUpdateBook;
  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updateBook = {
      name,
      author,
      category,
      rating,
      photo,
    };
    console.log(updateBook);
    // send data to server

    fetch(
      `    https://book-library-management-server.vercel.app/allBooks/update/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Book Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      this is update book:{category}
      <div className="my-12 p-8 bg-white border shadow-md max-w-2xl mx-auto">
        <h2 className="text-3xl text-black font-medium text-center p-6">
          Update Book
        </h2>
        <hr className="mb-6" />

        <form onSubmit={handleUpdateBook} className="space-y-6">
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
                defaultValue={name}
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
                defaultValue={author}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Book category  */}

          {/* <div className="form-control w-full">
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
                defaultValue={category}
                className="input input-bordered w-full"
              />
              
            </label>
          </div> */}
          <div>
            <label className="label">
              <span className="label-text text-black font-sm text-xl">
                Book category
              </span>
            </label>
            <select
              type="text"
              name="category"
              placeholder="category"
              defaultValue={category}
              className="input input-bordered w-full"
            >
              <option value="" selected="">
                Book category
              </option>
              <option value="">Novel</option>
              <option value=""> Drama </option>
              <option value=""> History </option>
              <option value=""> Thriller </option>
            </select>
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
                  defaultValue={rating}
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
            value="Update Book"
            className="b btn btn-outline bg-green-900 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
