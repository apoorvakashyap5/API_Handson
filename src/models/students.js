const mongoose=require('mongoose');
const validator=require('validator');

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    email:{
        type:String,
        required:true,
        unique:[true, "E-mail already in use"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    phone:{
        type:"Number",
        unique:true,
        required:true,
    },
    address:{
        type:String,
        required:true
        },         
})

//creating a collection using model
const Student= new mongoose.model('Student', studentSchema);
module.exports=Student;