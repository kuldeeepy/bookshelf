import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner.jsx";
import BackButton from "../Components/BackButton.jsx";
import { FaBookReader } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function ShowBook() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-semibold">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col text-start mx-auto mt-4 border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID:</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4 flex text-center">
            <span className="text-xl mr-4 text-gray-500">
              <FaBookReader fontSize={13} />
            </span>
            <span>{book.title}</span>
          </div>
          <div className="my-4 flex text-center">
            <span className="text-xl mr-4 text-gray-500">
              <FaUserCircle fontSize={13} />
            </span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Published On:</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
