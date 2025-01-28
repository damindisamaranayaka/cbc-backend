import express from 'express';
import {getProduct, createProduct,deleteProduct,getProductByName} from '../controllers/productController.js';

const productRouter= express.Router();

productRouter.get("/", getProduct);
productRouter.post("/", createProduct);
productRouter.delete("/:name", deleteProduct);

productRouter.get("/filter", (req,res)=>{
    res.json({
        message: "This is product filtering area"
    });
})

productRouter.get("/:name",getProductByName);  //product eke agt mokakhri ekak ekka awath ekt name ek wdyt salakala run krn ynn puluwn

export default productRouter;