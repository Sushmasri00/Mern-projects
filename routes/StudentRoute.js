const express=require("express");
const router=express.Router();
const Student=require("../models/Student");


router.post("/students",async(req,res)=>{
    const student=new Student(req.body);
    const result=await student.save();
    res.send(result);
});

router.get("/students",async(req,res)=>{
    const students=await Student.find();
    res.send(students);
});

module.exports=router;