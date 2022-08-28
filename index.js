const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://sales-campaign-fe.vercel.app"],
    credentials: true,
  })
);
app.use(express.json({}));

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
