import { IoIosCloseCircle } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function BookModal({ book, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-60 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[350px] bg-white rounded-xl p-4 flex flex-col relative text-start"
      >
        <IoIosCloseCircle
          className="absolute right-3 top-3 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2 mb-3">
          <FaBookReader className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <FaUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4 font-semibold">Summary</p>
        <p className="my-2">{book.summary}</p>
      </div>
    </div>
  );
}

export default BookModal;
