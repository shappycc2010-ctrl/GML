require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/plans", require("./routes/plans"));

app.get("/", (req, res) => {
  res.send("GML Backend Running");
});

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
