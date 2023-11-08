//TODO: create a seperate file for routes
//TODO: try to add books api

import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { Book } from "./model/bookModel.js";
import { PORT, MONGOdb_URL } from "./config.js";
import booksRoute from './routes/booksRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/books', booksRoute);

app.listen(PORT, () => {
  console.log("Running at Port: " + PORT);
});

mongoose.connect(MONGOdb_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("error reaching DB");
    console.log(error);
  });
