const express = require("express");
const app = express();

// bodyParser
app.use(express.json())
// route imports
const category = require("./routes/categoryRoute")
const product = require("./routes/productRoute");

app.use("/category", category)
app.use("/product", product);


module.exports = app;