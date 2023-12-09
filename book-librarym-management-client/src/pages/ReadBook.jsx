/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import img1 from "../assets/images/nw1.jpeg";
import img2 from "../assets/images/nw2.jpeg";
import img3 from "../assets/images/nw3.jpeg";
import img4 from "../assets/images/nw4.jpeg";
import img5 from "../assets/images/nw5.jpeg";
import img6 from "../assets/images/nw6.jpeg";
import { FaBookOpen } from "react-icons/fa";
const ReadBook = () => {
  const loadedReadBook = useLoaderData();
  console.log(loadedReadBook);
  const { image, sampleContent } = loadedReadBook;

  return (
    <div>
      <div className="border-2 p-4 my-6">
        {" "}
        <FaBookOpen className="font-bold text-2xl"></FaBookOpen> Book, 20023
      </div>
      <div>
        <div className="card p-6 shadow-md bg-white">
          <figure className="px-10 pt-10 border ">
            <img
              src={image}
              alt="brandsName"
              className="rounded-x w-full h-56"
            />
          </figure>
          <hr className="mt-6 " />
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-light text-black">
              {sampleContent}!
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-12">
          {/* 1st */}
          <div className="shadow-md p-2">
            <img src={img1} alt="" />
            <div className="text-left">
              {" "}
              <p>
                Book of Queens: The True Story of the Middle Eastern Horsewomen
                Who Fought the War on Terror
              </p>
              <h1>Pardis Mahdavi</h1>
            </div>
          </div>
          {/* 2nd */}
          <div className="shadow-md p-2">
            <img src={img2} alt="" />
            <p>Land of Milk and Honey</p>
            <h1>C Pam Zhang</h1>
          </div>
          {/* 3rd */}
          <div className="shadow-md p-2">
            <img src={img3} alt="" />
            <p>Oh My Mother! : A Memoir in Nine Adventures</p>
            <h1>Connie Wang</h1>
          </div>
          {/* 4th */}
          <div className="shadow-md p-2">
            <img src={img4} alt="" />
            <p>Our Share of Night</p>
            <h1>Mariana Enriquez</h1>
          </div>
          {/* 5th */}
          <div className="shadow-md p-2">
            <img src={img5} alt="" />
            <p>Small Worlds</p>
            <h1>Caleb Azumah Nelson</h1>
          </div>
          {/* 6th */}
          <div className="shadow-md p-2">
            <img src={img6} alt="" />
            <p>Soil: The Story of a Black Mother's Garden</p>
            <h1>Camille T. Dungy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
