const mongoose = require('mongoose');
const dbName = 'studysync';
const mongoUrl ="mongodb://localhost:27017/EcoXchange";
const {Schema}=mongoose;
const passportLocalMongooose=require("passport-local-mongoose");


mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected successfully to MongoDB');
  })
  .catch((err) => {
    console.error('Error occurred while connecting to MongoDB', err);
  });


  const user=new mongoose.Schema({
    email:{
      type:String,
      required: true
    }
  });
  user.plugin(passportLocalMongooose);
 

  const User=mongoose.model('User',user);

module.exports=User;