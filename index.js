require('dotenv').config();
const mongoose = require('mongoose');
const mainProg = require('./app');
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;

const uri="mongodb+srv://"+username+":"+password+"@cluster0.oiwkj.mongodb.net/shopDev?retryWrites=true&w=majority";

console.log("Connecting to MongoDb");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {connectSuccessfull();},
  err => { console.log(err); }
);

const connectSuccessfull = ()=>{
    console.log("Connected to MongoDb");
    mainProg();
}