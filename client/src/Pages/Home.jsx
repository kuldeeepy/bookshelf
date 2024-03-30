import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";
import BookCard from "../Components/Home/BookCard.jsx";
import BookTable from "../Components/Home/BookTable.jsx";

function Home() {
  const [showType, setShowType] = useState("table");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookshelf-2mbq.onrender.com/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  }, []);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold ml-2">Books</h2>
        <div className="flex gap-x-4">
          <button
            onClick={() => setShowType("table")}
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          >
            Table
          </button>
          <button
            onClick={() => setShowType("card")}
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          >
            Card
          </button>
        </div>
        <div className="create pr-2">
          <Link to={`/create`}>
            <FaCirclePlus fontSize={17} />
          </Link>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
}

export default Home;
