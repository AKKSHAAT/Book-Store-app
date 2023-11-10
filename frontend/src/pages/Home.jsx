import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Spinner } from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';


export const Home = () => {
  const [showType, setShowType] = useState('Table');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    axios
      .get('http://localhost:5000/books')
      .then(response=>{
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch(error=>{
        console.log(error);
        setLoading(false);
      })
  }, [])

  return (
    <div className='p-4 '>
      <div className='flex justify-between items-center bg-violet-950 h-10 rounded-xl p-8 text-white'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <div className='flex'>
          {showType === 'table' ? (
            <button
                onClick={()=> setShowType('card')}
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">
                Cards
          </button>
          ) : (
            <button
                onClick={()=> setShowType('table')}
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">
                Table
          </button>
          )}
          <Link to='/books/create'>
            <MdOutlineAddBox className='text-white text-5xl'/>
          </Link>
        </div>
      </div>
      {loading ?( 
        <Spinner/>
      ):(
        showType === 'table' ? <BooksTable books={books}/> : <BooksCard books={books}/>
      )}
    </div>
  )
}


// {books != {} || books != null?
// <h1>{books[0].title}</h1>
// : <></>
// }