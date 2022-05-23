const mongoose=require('mongoose');
//students-api is the db name.
const connect=async()=>{
    try{
         await mongoose.connect("mongodb://localhost:27017/students-api",{
    useNewUrlParser:true,}
    )
  //  useNewUrlParser:true,
    console.log("Connection established");
    }
catch(error){
    console.log("Conncetion failed");
}

}

module.exports=connect;