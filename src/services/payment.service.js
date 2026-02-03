

export const processPayment = (amount)=>{
    return {
        paymentId: "pay_" + Date.now(),
        status:"success"
    };
};