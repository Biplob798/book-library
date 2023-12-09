/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/images/pg1.webp";
import img2 from "../../assets/images/pg2.webp";
import img3 from "../../assets/images/pg3.webp";
import img4 from "../../assets/images/pg4.webp";
import img5 from "../../assets/images/pg5.webp";
import img7 from "../../assets/images/pg7.webp";
import img8 from "../../assets/images/pg8.webp";
import img9 from "../../assets/images/pg9.jpeg";
import img10 from "../../assets/images/pg11.jpeg";
import img11 from "../../assets/images/pg12.jpeg";
import img12 from "../../assets/images/pg13.jpeg";
import img13 from "../../assets/images/pg14.jpeg";
import img14 from "../../assets/images/pg15.jpeg";
import img15 from "../../assets/images/pg16.jpeg";
import img16 from "../../assets/images/pg17.jpeg";
import img17 from "../../assets/images/pg18.jpeg";
import img18 from "../../assets/images/pg19.jpeg";
import img19 from "../../assets/images/pg20.jpeg";
import img20 from "../../assets/images/pg9.jpeg";

const PhotoGallery = () => {
  return (
    <div>
      <p className="text-center font-bold text-3xl md:text-5xl my-6">
        Our Book Library <span className="text-orange-500">Photo Gallery</span>{" "}
      </p>
      <p className="text-center my-6">
        Captured Moments: A Visual Journey Through the Library's Photo Gallery -
        A Stunning Collection of Images That Tell Stories Beyond Words.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12 border shadow-md">
        <img
          src={img1}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />

        <img
          src={img2}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />

        <img
          src={img3}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />

        <img src={img4} alt="categoryName" className="rounded-x w-full h-56" />

        <img
          src={img20}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />

        <img
          src={img12}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />

        <img
          src={img7}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />

        <img
          src={img8}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img9}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img10}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img11}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img4}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img13}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img14}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img15}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img16}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img17}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img18}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img19}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
        <img
          src={img5}
          alt="categoryName"
          className="rounded-x w-full h-56 shadow-md"
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
