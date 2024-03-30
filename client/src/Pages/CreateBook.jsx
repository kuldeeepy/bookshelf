import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner.jsx";
import BackButton from "../Components/BackButton.jsx";

function CreateBook() {
  const [loading, setLoading] = useState(false);
  const [title, setTile] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [publishYear, setPublishYear] = useState("");
  let navigate = useNavigate();

  let data = { title, summary, author, publishYear };

  let handleSubmit = () => {
    setLoading(true);
    axios
      .post(`http://localhost:3000/books/create`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      {loading ? <Spinner /> : ""}
      <h1 className="text-3xl my-4">Create Book</h1>
      <div className="flex flex-col border-2 bg-gray-50 border-sky-400 rounded-lg max-w-[450px] p-8 mx-auto">
        <div className="my-4 text-start">
          <label htmlFor="title" className="text-xl ml-1 text-gray-500">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTile(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 my-2 w-full"
          />
        </div>
        <div className="my-4 text-start">
          <label htmlFor="title" className="text-xl ml-1 text-gray-500">
            Summary
          </label>
          <textarea
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 my-2 w-full"
          ></textarea>
        </div>
        <div className="my-4 text-start">
          <label htmlFor="title" className="text-xl ml-1 text-gray-500">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 my-2 w-full"
          />
        </div>
        <div className="my-4 text-start">
          <label htmlFor="title" className="text-xl ml-1 text-gray-500">
            Publish Year
          </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 my-2 w-full"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-sky-300 p-3 font-medium hover:bg-sky-500 w-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
