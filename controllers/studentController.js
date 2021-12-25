import Student from "../models/Student.js";
export const getNotifs = async(req,res)=>{
    try{
        const students=await Student.find();
        res.status(200).json(students);
    }catch(error){
        res.status(400).json({status:false, message:error.message});
    }
}

export const getNotifID = async(req,res)=>{
    try{
        const students=await Student.findById(req.params.id);
        res.status(200).json(students);
    }catch(error){
        res.status(400).json({status:false, message:error.message});
    }
}

export const saveNotif = async(req,res)=>{
    const students = new Student(req.body);
    try{
        const ressave=await students.save();
        res.status(201).json(ressave);
    }catch(error){
        res.status(400).json({status:false, message:error.message});
    }
}

export const updateNotif = async(req,res)=>{
    var notifID=await Student.findById(req.params.id);
    if(!notifID) return res.status(404).json({status:false, message:"Data not Found"})
    const notification = new Student(req.body);
    try{
        const ressave=await Student.updateOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(ressave);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

export const deleteNotif = async(req,res)=>{
    var notifID=await Student.findById(req.params.id);
    if(!notifID) return res.status(404).json({status:false, message:"Data not Found"})
    const notification = new Student(req.body);
    try{
        const resdel=await Student.deleteOne({_id:req.params.id});
        res.status(200).json(resdel);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}