const express=require('express')
const app=express();
const tasks=require('./routes/tasks')
const connectDB=require('./db')

const port=3000
app.listen(port,()=>{console.log(`Server is listening on port ${port}`)})