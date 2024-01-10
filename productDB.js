require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(ProductJson);
    console.log("Data added succesfully, see in (--> test --> products) ");
  } catch (error) {
    console.log("error");
  }
};

start();

// require("dotenv").config();
// const connectDB = require("./db/connect");
// const Product = require("./models/product");

// const ProductJson = require("./products.json");

// process.on("unhandledRejection", (err) => {
//   console.error("Unhandled Promise Rejection:", err);
//   process.exit(1);
// });

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGODB_URL);
//     await Product.create(ProductJson);
//     console.log("Data added successfully");
//   } catch (error) {
//     console.error("Error adding data to the database:", error);
//   } finally {
//     // Close the database connection when done
//     await mongoose.connection.close();
//   }
// };

// start();
