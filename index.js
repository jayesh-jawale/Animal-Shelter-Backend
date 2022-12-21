import express from "express";
const app = express();

import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import { petRouter } from "./routers/petRouter.js";

dotenv.config(); // getting all env keys

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;

// Handle CORS error
app.use(cors());

// Routers
app.get("/", (req, res) => {
  res.send(
    "Hi there! My name is Jayesh. Welcome to Animal Shelter Application"
  );
});

// Pet Router
app.use("/", petRouter);

const port = process.env.PORT;
app.listen(port, () => console.log("Started"));
