import mongoose from "mongoose";

const productSchema= mongoose.Schema(  //schema kynne api save krnn balaporoththu wena eke hadaya
    {
        name: String,
        price: Number,
        description:String
    }  )

    const Product= mongoose.model("products", productSchema)

    export default Product;