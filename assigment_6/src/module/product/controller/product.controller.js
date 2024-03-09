
import productModel from "../../../db/models/product.model.js";
 //  allproduct with user
export const allProduct =  async(req,res, next) => {
  try {
    const product  =  await productModel.find().populate([{
        path : "UserId",
        // select : " name  email "
    }])
    return res.json({message : "done " , product}) 
  } catch (error) {
    return res.json({message : "error" , error})
  }
}
//addprdouct
export const addproduct = async (req,res,next) => {
  try {
    const {name , descripation , price , UserId } = req.body

    const product =  await productModel.create({name , descripation , price , UserId }) 
    return res.json({message : "product added " , product })
  } catch (error) {
    return res.json ({message : "error" , error})
  }
}
// update product
export const updateProduct = async (req,res,next) => {
 try {
    const {_id} = req.params 
    const {name , descripation , price ,  UserId} = req.body
    // const product = awaitproductModel.findOneAndUpdate({_id , UserId},{ title , contant } , {new : true } )
     const product = await productModel.findByIdAndUpdate({_id , UserId},{name , descripation , price }  , {new : true }  )

    return product ?   res.json ({message : "done " , product })  : res.json({message : "in valid id or user id "})
 } catch (error) {
    return res.json({message : "error " , error})
 }
}

//deleteproduct
export const deleteProduct = async(req,res,next) => {
try {
    
    // findOneanddelete , find_idanddelete 
    // return object 
    const {_id} = req.params
    const {UserId} = req.body
    const  product = await productModel.deleteOne({_id , UserId})
    return product.deletedCount ?  res.json({message : "deleted " , product}) :  res.json({message : "deleted " }) 
} catch (error) {
    return res.json({message : "error" , error})
}
}
//allproduct
export const  allProducts = async (req,res,next) => {
try {
    const product =  await productModel.find()
    return res.json({message : "done " , product })
} catch  (error){
  return res.json({message : "error" , error })
}
}
//sort using 
 export const sortdesending = async (req,res,next) => {
    const product = await productModel.find().sort({createdAt:-1})
    return res.json({message : "product " ,product})
 }