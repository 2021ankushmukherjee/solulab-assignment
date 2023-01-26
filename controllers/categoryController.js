const Category = require("../models/categoryModel");


// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create({ 
        categoryId: req.body.categoryId,
        categoryName: req.body.categoryName
     });
    return res.status(201).json({
        success:true,
        category
    });
  } catch (err) {
    return res.status(500).json({
        success:false,
        message: `cant create category for ${err.message}`
    });
  }
};


// get all category from database
exports.allCategory = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json({
          success: true,
          categories
      });
    } catch (err) {
      return res.status(500).json({
          success: false,
          message: `Cant get category for:- ${err.message}`
      });
    }
  };


// delete category from database
exports.delCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.body.cid);
    if(!category){
        return res.status(404).json({
            success: false,
            message: "Category not found"

        });
    }
    await Category.findByIdAndDelete(req.body.cid);
    return res.status(200).json({
        success:true,
        message: "Category deleted successfully"
    });
  } catch (err) {
    return res.Status(500).json({
        success: false,
        message: `Category can't deleted for:- ${err.message}`
    });
  }
};

