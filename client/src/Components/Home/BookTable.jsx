import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";

function BookTable({ books }) {
  const [loading, setLoading] = useState(false);
  return (
    <table className="my-4 border-spacing-2 w-full border-separate rounded-md">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Published On
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((buk, idx) => (
          <tr key={buk._id}>
            <td className="border border-slate-600 rounded-md">{idx + 1}</td>
            <td className="border border-slate-600 rounded-md">{buk.title}</td>
            <td className="border border-slate-600 rounded-md max-md:hidden">
              {buk.author}
            </td>
            <td className="border border-slate-600 rounded-md max-md:hidden">
              {buk.publishYear}
            </td>
            <td className="border py-2 border-slate-600 rounded-md flex justify-center items-center gap-x-2">
              <Link to={`details/${buk._id}`}>
                <IoIosEye fontSize={12} />
              </Link>
              <Link to={`/edit/${buk._id}`}>
                <FaEdit fontSize={12} />
              </Link>
              <Link to={`/delete/${buk._id}`}>
                <BsTrashFill fontSize={12} />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookTable;
