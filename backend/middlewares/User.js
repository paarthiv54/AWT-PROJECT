const jwt = require("jsonwebtoken");


async function isLogin(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).json({ msg: "Access denied. No token provided." });
    }
    try {
        let decoded;
        try {
            decoded = jwt.verify(token, "cvrUser");
        } catch (err1) {
            decoded = jwt.verify(token, "cvrAdmin");
        }
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).json({ msg: "Invalid token." });
    }
    
}

async function isAdmin(req,res,next) {
    const token = req.headers.authorization?.[0].split(" ")[1]|| req.cookies.token
    if (!token) {
        return res.status(401).json({ msg: "Access denied. No token provided." });
    }
    try{
        const decoded = jwt.verify(token, "cvrAdmin");
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).json({ msg: "Only Admin can Delete or Update" });
    }
}

module.exports = { isLogin ,isAdmin};
