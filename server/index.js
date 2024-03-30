import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./routes/bookRoutes.js";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());

connection();
async function connection() {
  await mongoose
    .connect(process.env.ATLAS_URL)
    .then(() => {
      let PORT = process.env.SERVER;
      app.listen(PORT, () => {
        console.log(`DB and Server connected via PORT ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

app.use("/books", bookRouter);
