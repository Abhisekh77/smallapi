const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsTesting,
  alldata,
} = require("../controllers/products");

router.route("/").get(alldata);
router.route("/allproduct").get(getAllProducts);
router.route("/allproducttesting").get(getAllProductsTesting);

module.exports = router;
