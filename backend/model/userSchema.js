const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
},
year: {
    type: String,
    default: "",
    required: true
},
Section: {
    type: String,
    default: "",
    required: true 
},
username: {
    type: String,
    default: "",
    required: true 
},
password: {
    type: String,
    default: "",
    required: true
},
role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
    required: true
  }
});

const User = mongoose.model("User", schema);

module.exports = User;
