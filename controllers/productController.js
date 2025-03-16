import Product from "../models/product.js";
import { isAdmin } from "../controllers/userController.js";


export function createProduct(req,res){
    if(!isAdmin(req)){
        res.json({
            message: "Please login as administrater to add products."
        })
        return
    }

    const newProductData=req.body
    const product=new Product(newProductData)

    product.save().then(()=>{
        res.json({
            message: "Product created."
        })
    }).catch((error)=>{
            res.status(403).json({
                message: error
            
        })
    })
}

export function getProduct(req,res){
    Product.find({}).then((products)=>{
        res.json(products)     //product gnn ek onama user knkt krnn puluwn wenn ona log wela hitiyath nathath
    })
}