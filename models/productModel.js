const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required:[true, "Please enter product Id"],
        
    },
    productName:{
        type: String,
        required:[true, "Please enter product name"]
    },
    qtyPerUnit:{
        type:Number,
        required: true,
        default: 0
    },
    unitPrice:{
        type:Number,
        required:[true, "Please enter price of the product"]
    },
    unitlnStock:{
        type:String,
        required:[true, "Please enter unit of product"]
    },
    discontinued:{
        type:Boolean,
        required: true,
        default: false
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoryModel",
        required: true,
        
    }

})


module.exports = mongoose.model("Product", productSchema);

