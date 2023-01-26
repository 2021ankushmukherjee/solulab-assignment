const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProduct } = require("../controllers/productController");
const router = express.Router();

//router.route("/products").get(getAllProducts);
router.route("/create").post(createProduct);
router.route("/readall").get(getAllProducts);
router.route("/read").get(getProduct);
router.route("/update/:id").put(updateProduct);
router.route("/delete").delete(deleteProduct);

module.exports=router