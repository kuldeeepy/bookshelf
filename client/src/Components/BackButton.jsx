import React from "react";
import { Link } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";

function BackButton() {
  return (
    <div className="flex">
      <Link
        to={`/`}
        className="bg-sky-700 text-white px-4 py-1 rounded-lg w-fit"
      >
        <IoReturnUpBackSharp fontSize={14} />
      </Link>
    </div>
  );
}

export default BackButton;
