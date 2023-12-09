import { useLoaderData } from "react-router-dom";
import AllBooksCard from "../components/AllBooksCard";

const AllBook = () => {
  const loadedAllBooks = useLoaderData();
  console.log(loadedAllBooks);
  return (
    <div>
      <div className="text-center font-bold text-2xl md:text-5xl p-4 border-y-2 shadow-md my-6">
        <h2>
          Our All <span className="text-orange-500">Books</span> Collection
        </h2>
      </div>
      <p className="p-4 text-center my-4 border-y-2">
        Library is all-encompassing collection caters to diverse tastes.
        Spanning genres and eras, these books promise endless exploration,
        knowledge, and entertainment for every reader is preference
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {loadedAllBooks.slice(6, 22).map((book) => (
          <AllBooksCard key={book.id} AllBooksCard={book}></AllBooksCard>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
