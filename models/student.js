import mongoose from "mongoose"

const studentSchema= mongoose.Schema(  //schema kynne api save krnn balaporoththu wena eke hadaya
    {
        name: String,
        age: Number,
        gender:String
    }  )

    const Student= mongoose.model("students", studentSchema)

    export default Student
    