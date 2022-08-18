const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
// const { addColumn } = require("./queries/campaign.query");

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({}));

app.use("/api", router);

// addColumn();

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
