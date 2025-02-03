import Product from "../models/product.js";

/* export function getProduct(req,res){
    Product.find().then(  //database eke store wela thyen student list ek gnn puluwn  
        (productList)=>{
            res.json({
                list : productList
            })
        }
    ).catch(
        (err)=>{
            res.json({
                    message: "Error"
                }  )
        }
    )
}   */
export async function getProduct(req,res){
    try{const productList= await Product.find()
    res.json({                    //uda thiyena comment krpu .then wenuwt me await kramay use krnn puluwn
        list : productList
    })
}catch(e){
    res.json({
        message: "error"
    })
}
}

export function createProduct(req,res){   //export dammama me functions eliyt gnn puluwn  //meke get,create 2k nisa normal export ekk daanne
    console.log(req.user)
    
    if(req.user==null){
        res.json({
            message:"You are not logged in"
        })
        return  //madin function ek execute wena ek nawaththuwoth aniwaren return ekk denn ona,nathnm phl thyena ewath execute wenwa
    }

    if(req.user!="admin"){
        res.json({
            message:"You are not an admin"
        })
        return  //madin function ek execute wena ek nawaththuwoth aniwaren return ekk denn ona,nathnm phl thyena ewath execute wenwa
    }
 
    const product= new Product(req.body)
    product.save().then(()=>{
     res.json({
         message: "product created"
     })
    }).catch(()=>{
     res.json({
         message: "product is not created"
     })
    })
 }

 export function deleteProduct(req,res){
    Product.deleteOne({name:req.params.name}).then(
        ()=>{
            res.json({
                message: "Product deleted"
            }
            )
        }
    ).catch(
        (err)=>{
            res.json({
                    message: "Error"
                }  )
        }  
    )
 }

 export function getProductByName(req,res){
    const name= req.params.name;
    Product.find({name:name}).then(
        (productList)=>{
            if(productList.length ==0){
                res.json({
                    message: "product not found"
                })
            }else{
                res.json({
                    list:productList
                })
            }
           
        }
    ).catch(
        (err)=>{
            res.json({
                    message: "Error"
                }  )
        }  
    )

 }