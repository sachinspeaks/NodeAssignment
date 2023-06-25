const express=require('express')
const app=express();
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const port=3000


app.use(express.json())
app.use('/api/v1/users',tasks)
// app.use()

const start=async()=>{
try {
    await connectDB(process.env.MONGO_URI)
    console.log("Connected to DB....")
    app.listen(port,()=>{console.log(`Server is listening on port ${port}....`)})
} catch (error) {
    console.log(error)
}
}

start()
