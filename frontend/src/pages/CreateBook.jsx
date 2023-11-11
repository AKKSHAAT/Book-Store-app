import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { Spinner } from "../components/Spinner";
import {enqueueSnackbar} from "notistack";

export const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublishYear] = useState(0);
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  // const {enqueueSnackbar} = useSnackBar();
  function handleSaveBook() {
    const data = {
      "title": title,
      "auther": author,
      "publishYear": publisher,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books/", data)
      .then(() => {
        enqueueSnackbar("Book Created succusfully", {variant: "success"});
        setLoading("false");
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar("error try again", {variant: "error"});
        console.log(error);
        // alert("try again");
        setLoading("false");
      });
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4 text-white">Create Book</h1>
      <BackButton />
      {loading ?(
        <Spinner />
      ) : (
        <div className="w-[600px] mx-auto max:md[w-100]">
          <div className="mb-6">
            <input
              placeholder="Book's Title"
              onChange={(e)=>setTitle(e.target.value)} 
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <input
              placeholder="Author's name" 
              onChange={(e)=>setAuthor(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6 min-w:5">
            <input
              type="number"
              placeholder="Publish year" 
              onChange={(e)=>setPublishYear(e.target.value)}
              className="max-w-2xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            onClick={handleSaveBook} 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
