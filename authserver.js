const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(morgan("tiny"));

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connection established successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));

const userRouter = require("./routes/user");
const testRouter = require("./routes/test");
app.use("/api/user", userRouter);
app.use("/api/test", testRouter);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));

  app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, console.log(`listing at port ${port}`));
