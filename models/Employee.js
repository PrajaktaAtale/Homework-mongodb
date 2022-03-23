const mongoose=require("mongoose");
const emplyeeSchema=new mongoose.Schema({
    fullName:{
        type:String
    },
    birthDate:{
        type:Number
    },
    age:{
        type:Number
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    zipcode:{
        type:Number
    },
    phoneNo:{
        type:Number
    }
    
})
const userInfo = mongoose.model('employee', emplyeeSchema);
module.exports=userInfo
