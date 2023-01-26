const Product = require("../models/productModel");
const Category = require("../models/categoryModel");


// Create Product

exports.createProduct = async (req,res)=>{

    try{
        if(req.body.Discontinued === "yes"){

            const catg = await Category.findById(req.body.cid);
            if (!catg) return res.status(404).json({
                message: "Category not found"
            });

            const product = await Product.create({

                productId: req.body.ProductId,
                productName: req.body.ProductName,
                qtyPerUnit: req.body.Quantity,
                unitPrice:req.body.Price,
                unitlnStock: req.body.Unit,
                discontinued:true,  
                categoryId: catg._id
            });

            return res.status(201).json({
                success:true,
                product
            });

        }
        else if(req.body.Discontinued === "false"){ 
            const product = await Product.create({
                productId: req.body.ProductId,
                productName: req.body.ProductName,
                qtyPerUnit: req.body.Quantity,
                unitPrice:req.body.Price,
                unitlnStock: req.body.Unit,
                discontinued:false,
                categoryId: catg._id
            });

            return res.status(201).json({
                success:true,
                product
            });
        }
        else{
            res.status(400).json({
                success:false,
                message:"Please enter discontinue status:- yes or no"
            });
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            message: `product can't create for ${err.message}`
        })
    }
}



// Read All Product

exports.getAllProducts = async (req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json({
            success:true,
            products
        });
    }
    catch(err){
        res.status(400).json({
            success:false,
            message: `products not get for:- ${err.message}`
        });
    }
}


// Read

exports.getProduct = async (req,res)=>{
    try{

        const product = await Product.findById(req.body.id);

        if(!product){
            res.status(404).json({
                success:false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success:true,
            product
        });
    }
    catch(err){
        res.status(400).json({
            success:false,
            message: `product not get for:- ${err.message}`
        });
    }
}



// update Product

exports.updateProduct = async (req,res)=>{

    try{
    let product = Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    if(req.body.Discontinued === "yes" && req.body.Discontinued === "no"){
        product = await Product.findByIdAndUpdate(req.params.id,{
            productId: req.body.ProductId,
            productName: req.body.ProductName,
            qtyPerUnit: req.body.Quantity,
            unitPrice:req.body.Price,
            unitlnStock: req.body.Unit,
            discontinued:req.body.Discontinued          
        },{new:true, runValidators: true, useFindAndModify: false});

    }
    else{
        product = await Product.findByIdAndUpdate(req.params.id,{
            productId: req.body.ProductId,
            productName: req.body.ProductName,
            qtyPerUnit: req.body.Quantity,
            unitPrice:req.body.Price,
            unitlnStock: req.body.Unit,        
        },{new:true, runValidators: true, useFindAndModify: false});

    }
    res.status(201).json({
        success: true,
        product
    })
   }
   catch(err){
        res.status(400).json({
            success:false,
            message: `cant update product for:- ${err.message}`
        });
   }


}


// Delete Product

exports.deleteProduct = async (req,res)=>{

    try{
    const product = await Product.findById(req.body.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }
    await product.remove();
    res.status(200).json({
        success:true,
        message: "Product deleted successfully"
    });
   }
   catch(err){
    res.status(400).json({
        success:false,
        message: `cant delete product for:- ${err.message}`
    });
   }

}