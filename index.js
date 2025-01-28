import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from "./models/student.js";    //ctrl+space mgin gnn puluwn  // student.js eke default export krpu nisa thmy mehm krnn puluwn
import studentRouter from './routes/studentRouter.js';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";

const app= express();  //app kynne api dagnn name ek 

const mongourl= "mongodb+srv://Admin:Admin123@cluster0.wty0c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
        jwt.verify(token, "cbc-secret-key-7973", (error,decoded)=>{  //jwt me ena token ek decode krnn mge key ek use krl. 
           if(!error){
               // console.log(decoded)
                req.user=decoded
            }
        }) //userController.js eke daapu secret key ek=cbc-secret-key-7973
      }
      next()   
    }
)

app.use("/api/students", studentRouter)  //student kyl hoyan awoth me studentRouter block ekt ywnn
app.use("/api/products", productRouter)
app.use("/api/users", userRouter)

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


