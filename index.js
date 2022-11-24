const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

dotenv.config();
const mongoURI = process.env.MONGO_URI;

app.use(
  cors({
    origin: [
      "https://specijalna-ponuda.in.rs",
      "https://sales-campaign-fe.vercel.app",
      "http://localhost:1234",
      "http://127.0.0.1:5173",
    ],
    credentials: true,
  })
);

// app.use(cors());

app.use(express.json({}));

app.use("/api", router);

mongoose
  .connect(`${mongoURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port:${process.env.PORT}`)
    )
  )
  .catch((err) => console.log("test", err.message));
