const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const subjectModel = require("./models/subjectModel");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DB_URL +"/"+ process.env.DB_NAME);
app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.static("public"));

app.get("/subjects", (req, res)=>{
    subjectModel.subjectModel.find()
    .then((result)=>{res.send(result)})
    .catch((error)=>{console.log(error)});
})

app.post("/addSubject", (req, res)=>{
    subjectModel.subjectModel.create(req.body)
    .then((result)=>{res.send(result)})
    .catch((error)=>{console.log(error)});
})


app.listen(process.env.PORT, ()=>{console.log("http://"+process.env.IP_ADDRESS +":"+ process.env.PORT)});