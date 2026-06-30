const jwt = require("jsonwebtoken");
const Issue = require("./models/issue");

module.exports.verifyToken = (req, res, next)=> {
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

    if(issue.createdBy.toString() !== req.user.id && req.user.role !== "admin"){
        return res.status(403).json({
            message: "You are not the owner of this issue"
        })
    }
    next();
}

module.exports.isAdmin = (req, res, next) =>{
    if( req.user.role !== "admin"){
        return res.status(403).json({
            message: "You are not admin"
        })
    }
    next();
}