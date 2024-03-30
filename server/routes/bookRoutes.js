import express from "express";
import Book from "../modal/bookModal.js";
const bookRouter = express.Router();

//Show One
bookRouter.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let buk = await Book.findById(id);
    if (!buk) {
      res.status(404).send("Book Not Found!");
    }
    res.status(200).send(buk);
  } catch (error) {
    console.log(error.message);
  }
});

//Show ALL
bookRouter.get("/", async (req, res) => {
  try {
    let buks = await Book.find();
    if (!buks) {
      res.status(404).send("Sorry we couldn't find anything for you 🥲");
    }
    res.status(200).send(buks);
  } catch (error) {
    console.log(error.message);
  }
});

//Edit
bookRouter.put("/edit/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.summary ||
      !req.body.publishYear
    ) {
      res.status(500).send("Please try to fill all the requried fields");
    }
    let { id } = req.params;
    let theBuk = await Book.findByIdAndUpdate(id, req.body);
    await theBuk.save();
    res.status(200).send("Book Updated Successfully!");
  } catch (error) {
    console.log(error.message);
  }
});

//Create
bookRouter.post("/create", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.summary ||
      !req.body.publishYear
    ) {
      res.status(500).send("Please try to fill all the requried fields");
    }
    await Book.create(req.body);
    res.status(200).send("Book Published Successfully");
  } catch (error) {
    console.log(error.message);
  }
});

//Delete
bookRouter.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let buk = await Book.findByIdAndDelete(id);
    if (!buk) {
      res.status(404).send("Book Not Found!");
    }
    res.status(200).send("Book Deleted Successfully!");
  } catch (error) {
    console.log(error.message);
  }
});

export default bookRouter;
