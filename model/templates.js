const mongoose = require("mongoose");

const resumeDataSchema = new mongoose.Schema({
    usercreatedId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user.model",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        // required: true
    },
    mobile: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    website_name: {
        type: String
    },
    website: {
        type: String
    },
    github: {
        type: String
    },
    linkedIn: {
        type: String
    },
    gfg: {
        type: String
    },
    instagram: {
        type: String
    },
    objectives: {
        type: String
    },
    graduation: {
        university: { type: String },
        year: { type: Number },
        type: { type: String, default: "cgpa" },
        score: { type: String }
    },
    intermediate: {
        university: { type: String },
        year: { type: Number },
        type: { type: String, default: "percentage" },
        score: { type: String }
    },
    skills: {
        frontend: { type: String },
        backend: { type: String },
        languages: { type: String },
        other: { type: String }
    },
    project_count: {
        type: Number,
        default: 3
    },
    project1_name: { type: String },
    project1_description: { type: String },
    project1_link: { type: String },
    project2_name: { type: String },
    project2_description: { type: String },
    project2_link: { type: String },
    project3_name: { type: String },
    project3_description: { type: String },
    project3_link: { type: String },
                
    hobby: {
        type: String
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model("ResumeData", resumeDataSchema);
