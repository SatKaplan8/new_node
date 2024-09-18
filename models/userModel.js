const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: [true, "Name is Required"] },
    age: { type: Number, required: [true, "Age is Required"] },
    
},{timestamps:true}
);

module.exports=mongoose.model("User",userSchema)