require("dotenv").config();

const express = require("express");
const { hostname } = require("os");
const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

//middleware or to set router
app.use("/api/products", products_routes);

const sttaart = async () => {
  try {
    //connectDB 6th line wala line le promise return garxa so await use garne
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("Server is running on ${PORT}");
    });
  } catch (error) {
    console.log(error);
  }
};

sttaart();
