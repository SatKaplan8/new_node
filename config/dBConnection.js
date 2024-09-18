const mongoose = require('mongoose')
const dotenv=require('dotenv').config();
const port=process.env.PORT||5001;
const connectDb = async()=>{
try {
    const connect=await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('connected to the db')
} catch (error) {
    console.log(error);
    process.exit(1);
}
}

module.exports=connectDb