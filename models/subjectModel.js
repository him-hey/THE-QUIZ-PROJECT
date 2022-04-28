const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }
})

const subjectModel = mongoose.model("subjects", subjectSchema);

module.exports.subjectModel = subjectModel;