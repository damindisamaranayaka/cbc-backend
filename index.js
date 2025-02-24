import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()
app.use(cors())
const app= express();  //app kynne api dagnn name ek 

const mongourl= process.env.MONGO_DB_URL
 mongoose.connect(mongourl,{})
 const connection= mongoose.connection;

 connection.once("open", ()=>{
    console.log("database connected")
 })

app.use(bodyParser.json())   //middleware ekk dana wdy   //get ekat request ynn klin ek hariyt process krnwa

app.use(
    (req,res,next)=>{  //next kynne function ekak
      const token=req.header("Authorization")?.replace("Bearer ","")
      console.log(token)

      if(token != null){
        jwt.verify(token, process.env.SECRET, (error,decoded)=>{  //jwt me ena token ek decode krnn mge key ek use krl. 
           if(!error){
               // console.log(decoded)   mek dammam console eke log una user eke details json ekk wdyt pennanwa
                req.user=decoded
                
            }
        }) //userController.js eke daapu secret key ek=cbc-secret-key-7973
      }
      next()   
    }
)



app.use("/api/users", userRouter)
app.use("/api/products", productRouter)

app.listen(
    4000,
    ()=>{
        console.log('server is running on port 4000')
    }
)

app.get("/",
    (req,res)=>{    //get request ekk ena hamawelema me kotasa run wenwa
    console.log()
    console.log(req.body)
    console.log("hello world");

    res.json(
        {
            message : "Hello world "+ req.body.name
        }
    )   //ena request ekakat response ekk yawwima


 
})

app.post("/",
    (req,res)=>{
      
            const newStudent= new Student(req.body)

            newStudent.save().then(
                ()=>{
                    res.json({
                        message: "student saved"
                    })
                }
            ).catch(
                (error)=>{
                    res.json({
                        message: "error"
                    })
                }
            )
    }
)


