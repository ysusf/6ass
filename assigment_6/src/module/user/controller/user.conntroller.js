import userModel from "../../../db/models/user.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import productModel from './../../../db/models/product.model.js'



 // sign Up
 export const addUser = async (req,res,next) => {    
  
   try {
    const {name,email,password,age ,gender} = req.body
    const selectUser = await userModel.findOne({
        email
    })
    if(selectUser){
        return res.json({message : "user already exist "})
    }
    const hash =  bcrypt.hashSync(password ,8)   // hash make  hash for password 
    const user = await userModel.create({name,email,password : hash , age ,gender})   // can be using insertmodel => that return array of object 
    return res.json ({message : "user" , user })
   } catch (error) {
    return res.json({message : "error"})
   }

     

    

}

 //login
export const login = async (req,res,next) => {
    try {
        const {email , password} = req.body
    // const hash =  bcrypt.hashSync(password ,8) 
    const emailexist  = await userModel.findOne({  email  })
    if(!emailexist) {
        return res.json({message : "user  error in email or password   "})
    }
    const match = bcrypt.compareSync(password,emailexist.password)
    if (!match ) {
        return res.json({message : "user  error in email or password   "})
    } 
    const token = jwt.sign ({_id : emailexist._id , email : emailexist.email , adel : 'adel' },"engadel" , {expiresIn : 60*60})
    return res.json({message : "done " , token})
    } catch (error) {
        return res.json({message : "error" , error })
    }

   
}
//update
export const updateUser = async (req,res,next) => {
    try {
        const {_id} = req.params
     
    const {name , email ,password , gender} = req.body 
    const hash =  bcrypt.hashSync(password ,8)
    // const user = userModel.findOneAndUpdate({_id} , {name , email ,password : hash , gender} ,{new : true} )
     const user =  await userModel.findByIdAndUpdate({_id} , {name , email ,password : hash , gender} ,{new : true}   )

    return user? res.json({message : "done" ,user}) : res.json({message : "invailed id "})
    } catch (error) {
        return res.json({message : "error" , error })
        
    }
}
//delete
export const deleteUser = async (req,res,next) => {
    try {
        const {_id} = req.params
    const user = await userModel.deleteOne({_id}) 
    return user.deletedCount ?  res.json ({message : "done" , user}) : ({message : "invalid id "})

    } catch (error) {
        return res.json({message : "error" , error })
    }
}
 //search for user where his name contains
//with "X" and age less than Y
export const search = async (req,res,next) => {
   try {
    const {x , z } = req.params 
    const user = await userModel.find({name: { $regex: x , $options: 'i' } ,  age: { $lt: z}})
    return res.json({message : "done " , user }) 
   } catch (error) {
    return res.json ({message : "error" , error})
   }

   
}
//search for users where their ages are
//between X and Y
export const searchAge = async (req,res,next) => {
   try {
    const {x,z} = req.params
    const user = await userModel.find({age:{$gt : x }, age : {$lt : z}})
    return res.json( {message : "done" , user })
   } catch (error) {
    return res.json({message : "error" , error })
   }
}
// alluser
export const alluser =  async(req,res,next) => {
    try {
     const user = await userModel.find()
     return res.json({message : 'done' , user})
    } catch (error) {
     return res.json({message : "error" , error })
    }
 }


//all user with product 
 export const allUserProduct =  async (req,res,next) => {
    try {
        
        const productUser  =  await productModel.find().populate([{
            path : "UserId",
            // select : " name  email "
        }])
        
         
            // for (let i =0 ; i< productUser.length ; i++) {
            //     if(productUser.UserId  == productUser.user._id) {
            //         return res.json({productUser})
            //     }
    
            //   }
            return  res.json ({ message : "done " , productUser})
         
    } catch (error) {
        return res.json ({message : "error"})
    }
     }




