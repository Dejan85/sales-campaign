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
      "http://localhost:3000",
      "https://sales-campaign-fe.vercel.app",
      "http://127.0.0.1:5500",
      "http://localhost:1234",
      "http://specijalna-ponuda.in.rs",
      "https://specijalna-ponuda.in.rs",
    ],
    credentials: true,
  })
);

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
