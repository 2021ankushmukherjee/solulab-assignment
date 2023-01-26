const mongoose = require("mongoose");


const catagorySchema = new mongoose.Schema({

    categoryId:{
        type: String,
        required: [true, "Please enter category id"],
        unique:[true, "Id already exist"]
    },
    categoryName:{
        type: String,
        required:[true, "Please enter category name"],
        unique:[true, "Category already exist"],
        trim:true
    }
})


module.exports = mongoose.model("Category", catagorySchema);

