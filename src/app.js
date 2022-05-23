const express=require('express');
const connect=require("./db/connection");
const Student=require('./models/students');
connect();
const app=express();

const port=process.env.PORT || 8000;
 
//express.json() -- is a middleare req to recognize the incoming req object as json object otherwise undefined
app.get("/",(req,res)=>{
res.send("Hi...")
})
//for students registration ----creating a ew
app.use(express.json());
app.post('/students', (req,res)=>{
    const user=new Student(req.body);
       user.save().then(()=>{
           res.send(user);
       }).catch((e)=>{res.send(e.message)});
    console.log(req.body);
    
   // res.send("Hello from the other side by apoorva");
})

app.listen(port, ()=>{
    console.log(`Connection succesful at ${port}`);
});