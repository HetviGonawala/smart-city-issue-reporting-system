const Issue = require("../models/issue");

module.exports.showDashboard = async(req, res) =>{
    const totalComplaints = await Issue.countDocuments();

    const pendingComplaints = await Issue.countDocuments({
        status : "Pending"
    });

    const inProgressComplaints = await Issue.countDocuments({
        status: "In Progress"
    })

    const resolvedComplaints = await Issue.countDocuments({
        status: "Resolved"
    })

    res.json({
        total: totalComplaints,
        pending: pendingComplaints,
        inProgress: inProgressComplaints,
        resolved: resolvedComplaints,
    });
}

module.exports.showComplaints = async(req, res) =>{
    console.log("show complaints");
    const complaints = await Issue.find().populate("createdBy");
    console.log(complaints);
    res.json(complaints);
}

module.exports.updateComplaint = async(req, res) =>{
    const { id } = req.params;
    const { status } = req.body;
    const updatedComplaint = await Issue.findByIdAndUpdate(id, { status },{new:true}).populate("createdBy");
    res.json({
        message: "Complaint updated successfully",
        complaint: updatedComplaint,
    });
}

module.exports.deleteComplaint = async(req, res) =>{
    const { id } = req.params;
    const deletedComplaint = await Issue.findByIdAndDelete(id);
    res.json({
        message: "Complaint is deleted successfully",
        complaint: deletedComplaint,
    });
}