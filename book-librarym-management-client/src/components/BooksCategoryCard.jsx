import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const BooksCategoryCard = ({ booksCategory }) => {
  console.log(booksCategory);
  useEffect(() => {
    Aos.init();
  }, []);
  const { _id, name, image, category, rating } = booksCategory;

  return (
    <div>
      <div>
        {/* category product  */}
        <div
          data-aos="fade-bottom"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card p-6 bg-white shadow-md "
        >
          <figure className="px-10 pt-10 ">
            <img
              src={image}
              alt="categoryName"
              className="rounded-x w-96 h-56"
            />
          </figure>
          <hr className="mt-6 " />
          <div className="card-body items-center text-center   ">
            <h2 className="card-title text-2xl font-bold text-gray-700">
              {category}!
            </h2>
            <p className="text-2xl font-bold"> {name}</p>
            <div className="flex justify-center items-center py-4 gap-4">
              {" "}
              <p className=" font-bold">
                <span className="text-orange-600">Rating</span> {rating} ster
              </p>
            </div>

            <div className="card-actions">
              {" "}
              <Link to={`/viewDetails/${_id}`}>
                <button className="w-full mt-4 btn btn-outline bg-[#ea580c]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCategoryCard;
BooksCategoryCard.propTypes = {
  booksCategory: PropTypes.object,
};
