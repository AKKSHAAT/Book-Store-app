import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link
        to={destination}
        className="bg-purple text-purple text-3xl py-1 rounded-lg w-fit ">
        <BsArrowLeft />
      </Link>
    </div>
  );
};
