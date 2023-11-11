import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
export const BookModal = ({ book, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed  text-white bg-opacity-60 item-center justify-center flex z-50 m-auto absolute top-20 left-[30rem]"
    >
      <div
        onClick={(Event) => Event.preventDefault()}
        className="w-[600px] h-[400px] bg-gray-800 rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="cursor-pointer absolute right-6 top-6 text-3xl text-red-600"
          onClick={onClose}
        />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {book.title}
        </h5>
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
      </div>
    </div>
  );
};
