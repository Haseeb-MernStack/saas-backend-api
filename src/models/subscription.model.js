import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    planId: mongoose.Schema.Types.ObjectId,
    status: {type:String, default:"active"},
    expiresAt: Date,
});

export default mongoose.model("Subscription", subscriptionSchema);