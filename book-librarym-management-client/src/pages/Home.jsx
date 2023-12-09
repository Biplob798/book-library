import Banner from "../components/banner/Banner";

import { useLoaderData } from "react-router-dom";
import Books from "../components/books/Books";
import PhotoGallery from "../components/photoGallary/PhotoGallery";
import WhatNew from "../components/WhatNew";

const Home = () => {
  const loadedBooks = useLoaderData();

  console.log(loadedBooks);

  return (
    <div>
      <Banner></Banner>
      <div>
        <div className="text-center font-bold text-2xl md:text-5xl p-4 border-y-2 shadow-md">
          <h2>Our Books Category</h2>
        </div>
        <p className="p-4 text-center my-4 border-y-2">
          Library category books encompass diverse genres, catering to varied
          interests. From classics to contemporary literature, these books offer
          a rich literary experience for all readers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {loadedBooks?.slice(0, 6)?.map((book) => (
            <Books key={book.id} booksCard={book}></Books>
          ))}
        </div>
      </div>
      <WhatNew></WhatNew>
      <PhotoGallery></PhotoGallery>
    </div>
  );
};

export default Home;
