const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoute = require("./routes/contact");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api", contactRoute);

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});