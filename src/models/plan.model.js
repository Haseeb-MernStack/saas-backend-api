import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
    name:String,
    price: Number,
    features:[String]
});

export default mongoose.model("Plan", planSchema);