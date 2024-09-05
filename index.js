const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const path=require("path");
const mongoose = require('mongoose');
const axios=require("axios");
const session=require("express-session");
const passport=require("passport");
const user=require("./routes/user");
const company=require("./routes/company");
const organize=require("./routes/organize");

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"views")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("index");
});
app.use("/user",user);
app.use("/company",company);
app.use("/organize",organize);

app.listen(8080,()=>{
    console.log("app is listing at port 8080");
});

