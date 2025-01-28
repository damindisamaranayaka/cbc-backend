import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email :{
        type: String,
        required : true,  //email ek empty kyl save wenn be
        unique: true  // ekm email ek thyena dennek inn be 
    },
    firstName: {
        type: String,
        required : true
   },
   lastName: {
    type: String,
    required : true
   },
   password: {
    type: String,
    required : true
   },
  isBlock: {
    type: Boolean,
    default: false
   },
   type: {
    type: String,
    default: "customer"
},
   profilePicture: {
    type: String,
    default: "https://www.istockphoto.com/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-gm1451587807-488238421?searchscope=image%2Cfilm"
}
})

const User= mongoose.model("users", userSchema)

 export default User;