import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const register = async (req,res)=>{
    const hashed = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({...req.body, password:hashed});
    req.json(user);
};

export const login = async (req,res)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).json({message:"Invalid credentials"});

    const match = await bcrypt.compare(req.body.password, user.password);
    if(!match) return res.status(400).json({message:"Invalid credentials"});

    const token = jwt.sign({id: user._id, role:user.role}, process.env.JWT_SECRET);
    res.json({token});
};