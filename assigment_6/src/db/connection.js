import mongoose from "mongoose";

const connection = async () => {
      return await mongoose.connect('mongodb://127.0.0.1:27017/week6')
    .then(() => {
        console.log("connected to db ")
    })
    .catch(error => {
        console.log('fail a database')
        console.log(error)
    })
}


export default connection