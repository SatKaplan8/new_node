const express =require('express');
const { errorHandler } = require('./middleware/errorHandler.js');
const connectDb = require('./config/dBConnection.js');
const dotenv=require('dotenv').config();

connectDb()

// mongoose.connect('',()=>{

// })
const app=express();

 const port=process.env.PORT||5001;
app.use(express.json())
app.use('/api/users',require('./routes/userRoutes.js'))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

