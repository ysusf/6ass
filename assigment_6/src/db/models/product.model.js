
import { Schema , model , Types } from "mongoose";

const productSchema = new Schema ({
    name  : {
        type : String,
        required : true 
    }, descripation : {
       type : String,
       required : true 
    } , price : {
     type :Number ,
     required :true 

    },
     UserId : {
        type : Types.ObjectId,
        required : true ,
        ref : 'user' 
    }
}, {
    timestamps :true 
})

const productModel = model ('Product' , productSchema)

export default productModel

