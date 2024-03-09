import  {Schema , model } from 'mongoose'
const userSchema = new Schema({
    name : {
        type : String ,
        required : true ,
    },
    email : {
        type : String ,
        required : true , 
        unique : true 
    },
    password : {
        type : String ,
        required : true ,
    },
    age :  { 
        
        type :  Number,
        required :true
    },
    gender : {
        type : String ,
         enum : ['male' , 'female'],
         default : 'male'

    }, phone : { type :Number},
    confrimEmail : {
        type : Boolean,
        default:false
    }
}, {
    timestamps :true 
})

const userModel =  model('user',userSchema)
export default userModel