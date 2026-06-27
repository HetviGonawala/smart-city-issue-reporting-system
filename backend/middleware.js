const jwt = require("jsonwebtoken");
const Issue = require("./models/issue");

module.exports.verifyToken = (req, res, next)=> {
    console.log("Middleware executed");
    console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "No token provided"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;
        console.log(req.user);

        next();

    } catch (err) {

        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports.isIssueOwner = async (req, res, next) =>{
    const { id } = req.params;
    let issue = await Issue.findById(id);

    if(!issue){
        return res.status(404).json({
            message: "Issue not found"
        });
    }

    if(issue.createdBy.toString() !== req.user.id){
        return res.status(403).json({
            message: "You are not the owner of this issue"
        })
    }
    next();
}

module.exports.isAdmin = (req, res, next) =>{
    console.log("Role from token:", req.user.role);
    console.log("isAdmin route");
    if( req.user.role !== "admin"){
        return res.status(403).json({
            message: "You are not admin"
        })
    }
    console.log("before next");
    next();
    console.log("after next");
}