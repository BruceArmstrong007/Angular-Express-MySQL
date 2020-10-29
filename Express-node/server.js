const express = require('express');
const mysqlConnection  = require('./connection');
const app = express();

const cors = require("cors");

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
  }


app.use(cors(corsOptions));

//json in express
app.use(express.json());

const PORT = 3000;

app.get("/",(req,res)=>{
  mysqlConnection.query("select * from vendor",(err,rows)=>{
   if(err){
    console.log(err);
   }
   else{
    res.status(200).send(rows);
   }
  });
});

app.post("/create",(req,res)=>{
  mysqlConnection.query("insert into vendor(vendorName,type,contactEmail,websiteURL) values('"+req.body.vendorName+"','"+req.body.type+"','"+req.body.contactEmail+"','"+req.body.websiteURL+"');",(err)=>{
    if(!err){
         res.status(200).json({success:true,message:"Successfully Added!"});
     }else{
         console.log(err);
         res.status(400).json({success:false,message:"Error, Try again !"});
     }
});
});

app.post("/edit",(req,res)=>{
  mysqlConnection.query("select * from vendor where id ="+req.body.id,(err,rows)=>{
    if(!err){
         res.status(200).send(rows);
     }else{
         console.log(err);
         res.status(400).json({success:false,message:"Error, Try again !"});
     }
});
});

app.post("/update",(req,res)=>{
  console.log(req.body);
  mysqlConnection.query("update vendor set vendorName='"+req.body.vendorName+"',type='"+req.body.type+"',contactEmail='"+req.body.contactEmail+"',websiteURL='"+req.body.websiteURL+"' where id = "+req.body.id+";",(err)=>{
    if(!err){
         res.status(200).json({success:true,message:"Successfully Added!"});
     }else{
         console.log(err);
         res.status(400).json({success:false,message:"Error, Try again !"});
     }
});
});

app.post("/delete",(req,res)=>{
  console.log(req.body);
  mysqlConnection.query("delete from vendor where id = "+req.body.id+";",(err)=>{
    if(!err){
         res.status(200).json({success:true,message:"Successfully Deleted!"});
     }else{
         console.log(err);
         res.status(400).json({success:false,message:"Error, Try again !"});
     }
});
});

app.listen(PORT, () => {console.log("Server is Running on http://localhost:3000/");});

