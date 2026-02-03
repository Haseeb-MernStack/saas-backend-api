import Subscription from "../models/subscription.model.js";
import {processPayment} from "../services/payment.service.js";

export const subscribe = async (req,res)=>{
    const payment = processPayment(100);

    const sub = await Subscription.create({
        userId: req.user.id,
        planId: req.body.planId,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    });

    res.json({payment, sub});
};