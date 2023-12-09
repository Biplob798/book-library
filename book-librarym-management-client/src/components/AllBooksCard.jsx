import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllBooksCard = ({ AllBooksCard }) => {
  console.log(AllBooksCard);

  const { _id, image, name, author, category, rating } = AllBooksCard;

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {" "}
      <div
        className="card p-6 shadow-md bg-white"
        data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <figure className="px-10 pt-10 border ">
          <img src={image} alt="brandsName" className="rounded-x w-96 h-56" />
        </figure>
        <hr className="mt-6 " />
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-gray-700">
            {category}!
          </h2>
          <div className="space-y-3 my-2 font-bold">
            <h2>{name}</h2>
            <p>{author}</p>
            <p>
              {" "}
              <span className="text-orange-600">Rating</span> : {rating} star
            </p>
          </div>

          <div className="card-actions ">
            {" "}
            <Link to={`/updateBook/${_id}`}>
              <button className="btn btn-outline bg-[#ea580c]">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksCard;
AllBooksCard.propTypes = {
  AllBooksCard: PropTypes.object,
};
