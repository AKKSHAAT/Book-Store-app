import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { Spinner } from "../components/Spinner";


export const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  function handleEditBook() {
    const data = {
      "title": title,
      "auther": author,
      "publishYear": publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        setLoading("false");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("try again");
        setLoading("false");
      });
  }

  useEffect(()=>{
    console.log(id);
    setLoading(true); 
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response)=>{
        console.log(response.data);
        setTitle(response.data.title);
        setAuthor(response.data.auther);
        setPublishYear(response.data.publishYear)
        setLoading(false);
      })
      .catch(error=>{
        alert("error check console [ctrl + shift + i]"); 
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl my-4 text-white">Edit Book</h1>
      <BackButton />
      {loading ?(
        <Spinner />
      ) : (
        <div className="w-[600px] mx-auto max:md[w-100]">
          <div className="mb-6">
            <label htmlFor="author" className="text-xl mx-1">Title</label>
            <input
              value={title}
              placeholder="Book's Title"
              onChange={(e)=>setTitle(e.target.value)} 
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="author" className="text-xl mx-1">Author</label>
            <input
              value={author}
              placeholder="Author's name" 
              onChange={(e)=>setAuthor(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6 min-w:5">
          <label htmlFor="author" className="text-xl mx-1">Publish Year</label>
            <input
              value={publishYear}
              type="number"
              placeholder="Publish year" 
              onChange={(e)=>setPublishYear(e.target.value)}
              className="max-w-2xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            onClick={handleEditBook} 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};




