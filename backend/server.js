const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const Notice = require("./model/noticeSchema");
const User = require("./model/userSchema");
const{createJWT}=require("./auth")
const {isLogin,isAdmin} = require("./middlewares/User")
const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
  }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/paarthiv').then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err))

app.get("/",(req,res)=>{
    res.status(200).json({"msg":"Welecome"})
})

// Notices
app.get("/notices",isLogin,(req,res)=>{
    data=null
    Notice.find({}).sort({date:-1}).then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json({data:`Data not found${err}`})
    })
})

app.get("/notices/:id",(req,res)=>{
    let id = req.params.id
    Notice.findById(id).then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({"data":[]})
    })
})

app.post("/notices", (req, res) => {
    const notice = req.body;
    Notice.create(notice)
        .then((data) => {
            res.status(201).json({ msg: "Notice added successfully", notice: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ msg: "Error adding notice", error: err.message });
        });
});

app.put("/notices/:id", (req, res) => {
    const id = req.params.id;
    const notice = req.body;
    Notice.findByIdAndUpdate(id, notice, { new: true, runValidators: true })
        .then((data) => {
            if (!data) {
                return res.status(404).send({ msg: "Notice ID not found" });
            }
            res.send({ msg: "Notice updated successfully", updatedNotice: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ msg: "Error updating notice", error: err.message });
        });
});

app.delete("/notices/:id", (req, res) => {
    const id = req.params.id;
    Notice.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({ msg: "Notice ID not found" });
            }
            res.send({ msg: "Notice deleted successfully" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ msg: "An error occurred while deleting the notice" });
        });
});

// Login and Signup
app.post("/login",async (req,res)=>{
   const {username,password}=req.body;
   const user = await User.findOne({"username":username,"password":password})
   console.log(user);
   if(user==null){
    return res.json({"msg":"User not found"})
   }
   const token = createJWT(user)
   res.cookie("token",token)
   res.json({"msg":"User logined",user})
})

app.post("/register",(req,res)=>{
    let user = req.body;
    if(!user) return res.json({"msg":"Please Enter the details"})
    console.log(user);
    User.create(user)
        .then((data)=>{
            // console.log(data)
            res.json({"msg":"Thank you for registering"})
        })
        .catch((err)=>{
            res.json({"msg":err,"data":user})
        })
})

app.listen(2000,(err)=>{
    if(err) console.log(err)
    console.log("Server stated")
})

