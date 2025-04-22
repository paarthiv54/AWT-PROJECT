const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    description: String, 
    date: Date,
    category :{
        type:String,
        enum:["Placement","General","Exam"]
    }
});

const Notice = mongoose.model("Notice", schema);

module.exports = Notice;
