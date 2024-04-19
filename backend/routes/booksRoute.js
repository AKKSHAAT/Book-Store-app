import express from 'express';
import { Book } from '../model/bookModel.js';

const router = express.Router();

router.post("/", (req, res) => {
  console.log("post");
    try {
      const book = req.body;
      if( !book.title || !book.auther || !book.publishYear) {
        return res.status(400).send("enter all required fields");
      }
  
      Book.create({
        title: book.title,
        auther: book.auther,
        publishYear: book.publishYear
      })
      .then(()=>{
        return res.status(200).send("book added");
      })
  
  
    } catch (error) {
      res.status(500).send(error.messege);
    }
});

router.put("/:id", async (req, res) => {
try {
    const id = req.params.id;
    const book = req.body;
    if( !book.title || !book.auther || !book.publishYear) {
    return res.status(400).send("enter all required fields");
    }

    const updateResult = await Book.findOneAndUpdate({_id: id}, book);

    if(!updateResult) res.status(400).send({messege: "Book not found"});
    else res.status(200).send({messege: "Book was updated successfully"});

} catch (error) {
    res.status(500).send({messege: "errror"});
}
});

router.get("/", async (req, res)=>{
try {
    const book = await Book.find({})
    .then((book)=>{
    res.status(200).send(JSON.stringify({
        count: book.length,
        data: book
    }));
    })
} catch (error) {
    res.status(400).send(error);
}
})

router.get("/:id", async (req, res)=>{
try {
    const id = req.params.id;
    const book = await Book.findOne({_id:id})
    .then((book)=>{
    res.status(200).send(JSON.stringify(book));
    })
} catch (error) {
    res.status(400).send(error);
}
})

router.delete("/:id", async (req, res)=>{
try {
    const id = req.params.id;
    await Book.deleteOne({_id: id})
    .then(book=>{
    if(!book) res.status(404).send({messege: "Book not found"});
    else res.status(200).send({messege: "Book was deleted"});
    })

} catch (error) {
    
}
})

export default router;