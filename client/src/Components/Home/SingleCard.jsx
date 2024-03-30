import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { IoMdInformationCircle } from "react-icons/io";
import { useState } from "react";
import BookModal from "./BookModal";

function SingleCard({ book }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="border-2 w-[210px] border-slate-400 rounded-lg m-4 px-3 py-2 hover:shadow-xl relative">
      <h2 className="px-3 py-1 bg-blue-300 rounded-lg absolute top-2 right-2">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500 text-start text-[10px]">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <FaBookReader className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <FaUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between p-4 mt-4">
        <IoMdInformationCircle
          fontSize={12}
          onClick={() => setShowModal(true)}
        />
        <Link to={`/details/${book._id}`}>
          <IoIosEye fontSize={12} />
        </Link>
        <Link to={`/edit/${book._id}`}>
          <FaEdit fontSize={12} />
        </Link>
        <Link to={`/delete/${book._id}`}>
          <BsTrashFill fontSize={12} />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default SingleCard;

{
  /*  */
}
