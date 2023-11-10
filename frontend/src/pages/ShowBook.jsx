import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { Spinner } from "../components/Spinner";

export const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const id = useParams();

  useEffect(() => {
    setLoading(true);
    const LINK = `http://localhost:5000/books/${Object.values(id)[0]}`;
    console.log(id);
    console.log(LINK);
    axios
      .get(LINK)
      .then( response => {
        setBook(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log("error!!!: " + error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 text-white">
      
      <h1 className="text-3xl my-4 text-white">Show Book</h1>
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-4 border-purple-400 rounded-xl font-mono w-fit p-4 my-2 ">
          <div className="my-4">
            <h1 className="text-4xl mr-4 text-grey-500">{book.title}</h1>
          </div>
          <hr></hr>
          <div className="my-4 flex justify-around">
            <span className="text-xl mr-2 text-grey-500">Author|</span>
            <span> {book.auther} </span>
          </div>

          <div className="my-1 flex justify-between">
            <span className="text-xl mr-2 text-grey-500">Create at|</span>
            <span> {new Date(book.createdAt).toString().slice(0,15)} </span>
          </div>

          <div className="my-1 flex justify-between">
            <span className="text-xl mr-2 text-grey-500">Updated|</span>
            <span> {new Date(book.updatedAt).toString().slice(0,15)} </span>
          </div>

          <div className="my-1 ">
            <span className="text-xl mr-2 text-grey-500">id|</span>
            <span className="text-gray-400"> {book._id} </span>
          </div>

        </div>
      )}
    </div>
  );
};
