import Order from "../models/order.js";

export async function createOrder(req,res){
    //take the latest product id
    try{
        const latestOrder= await Order.find().sort
        ({date : -1}).limit(1)   //since date want in desending order   //limit 1 dammamd order eke item kochchr thibbth array ek 1 item ekakt limit krnwa
        let orderId

        if(latestOrder.length==0){
            orderId= "CBC001"
        }else{
            const currentOrderId= latestOrder[0].orderId

            const numberString= currentOrderId.
            replace("CBC","")

            const number= parseInt(numberString)

            orderId= "CBC" + number.to
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}