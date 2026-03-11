const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/StudentRoute");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/6csn")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.use("/api", studentRoutes);

app.listen(3000,()=>{
console.log("Server running on port 3000");
});