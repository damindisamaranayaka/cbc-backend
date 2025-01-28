import express from "express";
import Student from "../models/student.js";
import {getStudents, createStudent, deleteStudent} from "../controllers/studentController.js"; //normal export ekakin arn thyenne

//create studentRouter
const studentRouter= express.Router();

//studentRouter ekata get request ekk awoth krnn ona de
studentRouter.get("/",getStudents)


//studentRouter ekt post request ekk awoth krnn ona de
studentRouter.post("/",createStudent)

studentRouter.delete("/", deleteStudent)

export default studentRouter;  //mek export krpu nisavwena file wl use krnn puluwn import krl