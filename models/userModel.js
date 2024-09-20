const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: [true, "Name is Required"] },
    age: { type: Number, required: [true, "Age is Required"] },
    dept:{type: String, required: [true, "Dept is Required"]},
    salary:{type: Number, required: [true, "Salary is Required"]},
    gender:{type: String, required: [true, "Gender is Required"]},
    state:{type: String, required: [true, "State is Required"]},
    phone:{type: Number, required: [true, "Phone is Required"]},
    username:{type: String, unique: true, required:[true,"username is required"]},
    password:{type: String,required:[true,"password required"]}
    
},{timestamps:true}
);

module.exports=mongoose.model("User",userSchema)