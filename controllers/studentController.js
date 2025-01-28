import Student from "../models/student.js"

export function getStudents(req,res){
    Student.find().then(  //database eke store wela thyen student list ek gnn puluwn  
        (studentList)=>{
            res.json({
                list : studentList
            })
        }
    )
}

export function createStudent(req,res){   //export dammama me functions eliyt gnn puluwn  //meke get,create 2k nisa normal export ekk daanne
    const student= new Student(req.body)
    student.save().then(()=>{
     res.json({
         message: "student created"
     })
    }).catch(()=>{
     res.json({
         message: "student is not created"
     })
    })
 }

 export function deleteStudent(req,res){
    Student.deleteOne({name:req.body.name}).then(
        ()=>{
            res.json({
                message: "student deleted"
            }
            )
        }
    )
 }

 