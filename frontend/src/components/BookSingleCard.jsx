import React from "react";

import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

export default function BookSingleCard({book}) {
  return (
    <div
      key={book._id + 1}
      className="min-w-[400px] md:min-w-[250px] mx-2 my-2 p-6 border border-slate-800 rounded-lg shadow dark:bg-gray-800 dark:border-slate-700"
    >
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {book.title}
        </h5>
      </div>
      <hr className="opacity-20"></hr>
      <p className="mb-3 font-normal text-gray-700 dark:text-white ">
        <span className="font-medium text-gray-500">Auther: </span>
        {book.auther}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-white">
        <span className="font-medium text-gray-500">Publish Year: </span>
        {book.publishYear}
      </p>
      <p className="mb-3 font-medium text-gray-700">{book._id}</p>
      <div className="flex">
        <Link
          to={`/books/details/${book._id}`}
          className="mx-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <BsInfoCircle className="text-2xl text-white" />
        </Link>
        <Link
          to={`/books/edit/${book._id}`}
          className="mx-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <AiOutlineEdit className="text-2xl text-yellow-200" />
        </Link>
        <Link
          to={`/books/delete/${book._id}`}
          className="mx-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <MdOutlineDelete className="text-2xl text-red-500" />
        </Link>
      </div>
    </div>
  );
}
