const jwt  = require("jsonwebtoken");

function createJWT(user){
    const token = jwt.sign({ id: user._id, username: user.username, role: user.role},`cvr${user.role}`,{ expiresIn: "1h" }) 
    return token;
}


module.exports = {
    createJWT
}