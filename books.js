// const http= require("http");
const express=require('express')
const app=express();
let book=[
    {id:"123",title:"beauty and the beast",year:1780,author:"jebjf"},

]
app.post("/add",(req,res)=>
{ 
 res.send("add successfully")
})
app.get("/list",(req,res)=>
{ 
  res.send(JSON.stringify(book))
  console.log("read successfully")
})
app.put("/update",(req,res)=>
 { 
   
    res.send("update successfully")
})

app.delete("/delete",(req,res)=>
    { 
      
       res.send("delete successfully")
   })

app.listen(3000,(req,res)=>{
    console.log("listoning port is 3000");   
});
