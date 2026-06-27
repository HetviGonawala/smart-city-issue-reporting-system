const Issue = require("../models/issue");

module.exports.createIssue = async(req, res) =>{
    console.log("create",req.user);
    const issue = new Issue(req.body);
    issue.createdBy = req.user.id;

    if( typeof req.file !== "undefined"){
        const url = req.file.path;
        const filename = req.file.filename;

        issue.image = { url, filename};
    }

    await issue.save();
    res.json({
        message: "New issue is created",
    })
}

module.exports.showIssue = async(req,res) =>{
    const { id } = req.params;
    const issue = await Issue.findById(id);
    res.json(issue);
}

module.exports.updateIssue = async(req, res) =>{
    const { id } = req.params;

    console.log(req.body);
    console.log(req.file);
    const issue = await Issue.findByIdAndUpdate(id, {...req.body},{new:true});

    //for edit image

    if( typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;

        issue.image = { url, filename };
        await issue.save();
    }

    res.json({
        message: "Issue is updated",
        issue,
    });
}

module.exports.deleteIssue = async(req, res) =>{
    const { id } = req.params;
    const deletedIssue = await Issue.findByIdAndDelete(id);
    res.json({
        message: "Issue is deleted successfully!"
    });
}