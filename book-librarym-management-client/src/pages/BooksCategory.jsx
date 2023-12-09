/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import BooksCategoryCard from "../components/BooksCategoryCard";

const BooksCategory = () => {
  const loadedCategory = useLoaderData();
  console.log(loadedCategory);

  return (
    <div>
      <div className="text-center my-6 border p-4 font-bold shadow-md">
        <h2>
          Library's Vast Collection: Explore Titles Across Genres. From Timeless
          Classics to Contemporary Bestsellers, Find Stories That Ignite
          Imagination and Enrich Knowledge.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 my-6 bg-gray-100">
        {/* brands card  */}
        {loadedCategory.slice(1, 5).map((category) => (
          <BooksCategoryCard
            key={category.id}
            booksCategory={category}
          ></BooksCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default BooksCategory;
