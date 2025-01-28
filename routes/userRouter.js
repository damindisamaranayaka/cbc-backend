import express from "express";
import {createUser, loginUser} from '../controllers/userController.js';

const userRouter= express.Router();

userRouter.post("/",createUser)
userRouter.post("/login", loginUser)  //post ek thmy secure request wargaya

export default userRouter; 