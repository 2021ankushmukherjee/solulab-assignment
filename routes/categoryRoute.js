const express = require("express");
const { createCategory, allCategory, delCategory } = require("../controllers/categoryController");
const router = express.Router();


router.route("/create")
.post(createCategory)

router.route("/category")
.get(allCategory)
.delete(delCategory);

module.exports=router;
