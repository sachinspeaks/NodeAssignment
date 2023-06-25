const User=require('../dbmodel/model')


const getAllUser=async (req,res)=>{
    try {
        const users=await User.find({})
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
}


const getUser=async (req,res)=>{
    try {
        const {id:userID}=req.params
        const user=await User.findOne({_id:userID})
        if(!user)return res.status(404).json({msg:`Cannot find user with id ${userID}`})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
}

const createUser=async (req,res)=>{
    try {
        const user=await User.create(req.body)
        res.status(201).json({user})
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
}


const deleteUser=async (req,res)=>{
    try {
        const {id:userID}=req.params
        const user=await User.findOneAndDelete({_id:userID})
        if(!user)return res.status(404).json({msg:`Cannot find user with id ${userID}`})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
}

const updateUser=async (req,res)=>{
    try {
        const {id:userID}=req.params
        const user=await User.findByIdAndUpdate({_id:userID},req.body,{new:true,runValidators:true})
        if(!user)return res.status(404).json({msg:`Cannot find User with id${userID}`})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
}


module.exports={
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
}