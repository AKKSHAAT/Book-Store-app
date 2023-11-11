import React, { useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { Spinner } from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar } from 'notistack';

export const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  // const { enqueueSnackbar } = useSnackBar();
  
  function handleDeleteBook() {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        enqueueSnackbar("Book deleted succusfully", {variant: "success"});
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("error", {variant: "error"});
        // alert("check console [ctrl + shift + i]");
        console.log(error);
      });
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        alert("error fetching book data");
      });
  }, []);
  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl my-4 text-white">Delete Book</h1>
      <BackButton />

      <div className=" m-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <h5 className="my-3 text-xl font-medium text-gray-900 dark:text-white">
            Are you sure you want to delete
          </h5>
          <h5 className=" text-m font-mono text-gray-400">{title}</h5>
          <div className="flex mt-4 space-x-3 md:mt-4">
            <button
              onClick={handleDeleteBook}
              type="button"
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
              Yes
            </button>
            <button
              onClick={()=> navigate("/")}
              type="button"
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
