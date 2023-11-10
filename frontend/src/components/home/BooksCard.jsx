import React from "react";

import BookSingleCard from "../BookSingleCard";

export default function BooksCard({ books }) {
  return (
    <div
      className="flex flex-wrap mt-10 justify-around"
    >
      {books.map((book) => {
        return( 
          <BookSingleCard key={book._id} book={book}/>
        )
      })}
    </div>
  );
}
