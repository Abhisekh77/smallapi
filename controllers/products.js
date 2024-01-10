const Product = require("../models/product");

const alldata = async (req, res) => {
  // const myData = await Product.find({});
  //filtering property support gardaina user bata, so filtering pani garaunako lagi req.query use garne
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "I am getting AllProducts" });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am getting AllProductsTesting" });
};

module.exports = { alldata, getAllProducts, getAllProductsTesting };
