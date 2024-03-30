import { useState } from "react";
import SingleCard from "./SingleCard";

function BookCard({ books }) {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex justify-start px-4 py-3 flex-wrap">
      {books.map((buk) => (
        <SingleCard key={buk._id} book={buk} />
      ))}
    </div>
  );
}

export default BookCard;
