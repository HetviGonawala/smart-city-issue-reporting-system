const Issue = require("../models/issue");

module.exports.myComplaints = async(req, res) =>{
    const complaints = await Issue.find({
        createdBy : req.user.id
    });
    res.json(complaints);
}