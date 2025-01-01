import asyncHandler from 'express-async-handler'
// import Category from '../models/categoryModel'



//@desc get all category
//@route get api/category/all
//@access public
const getAllCategory = asyncHandler( async (req,res) => {

    res.json({message : "all category"})
})


//@desc create category
//@route post api/category
//@access private 
const createCategory = asyncHandler(async (req,res) => {

    const {name, description} = req.body;
    if(!name || !description){
        res.status(400);
        throw new Error("Information is missing");
    }
    res.status(201).json({message : "category created"});
})


//@desc update category
//@route put api/category/:id
//@access private
const updateCategory = asyncHandler( async (req,res) => {

    res.status(200).json({message : "category updated"});
})


//@desc delete category
//@route delete api/category/:id
//@access private
const deleteCategory = asyncHandler( async (req,res) => {

    res.status(200).json({message : "category deleted"})
})

export { getAllCategory, createCategory, updateCategory, deleteCategory}