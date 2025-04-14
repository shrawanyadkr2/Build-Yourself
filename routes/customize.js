var express = require('express');
var router = express.Router();
var resumeDataModel = require('../model/templates');
const isLoggedInUser = require('../middleware/isloggedInUser');
const resumeImage = require('../middleware/Multer.for.resume');
var userModel = require('../model/user.model')


router.get("/:id", isLoggedInUser, function(req, res){
    let templatesId = req.params.id
    
    res.render("customize");
})

router.post("/", isLoggedInUser, resumeImage.single('image'), async function(req, res){
    const user = req.user;
    const { name, mobile, email, website_name, website, github, linkedIn, gfg, instagram, objectives,
        graduation_university, graduation_year, graduation_type, graduation_score,
        intermediate_university, intermediate_year, intermediate_type, intermediate_score,
        frontend_skills, backend_skills, language_skills, other_skills,
        project_count, project1_name, project1_desc, project1_link,
        project2_name, project2_desc, project2_link, project3_name, project3_desc, project3_link,
        hobby } = req.body;

        let resumeImage = req.file.filename;
        let user1 = await userModel.findOne({email: user.email})   
        
    let createResume = await resumeDataModel.create({
        usercreatedId : user1._id.toString(), name, mobile, email, website_name, website, github, linkedIn, gfg, instagram, objectives,graduation: {
            university: graduation_university,
            year: graduation_year,
            type: graduation_type,
            score: graduation_score
        },
        intermediate: {
            university: intermediate_university,
            year: intermediate_year,
            type: intermediate_type,
            score: intermediate_score
        },
        skills: {
            frontend: frontend_skills,
            backend: backend_skills,
            languages: language_skills,
            other: other_skills
        },
        project_count: project_count,
        project1_name, project1_description:project1_desc, project1_link,
        project2_name, project2_description:project2_desc, project2_link, 
        project3_name, project3_description:project3_desc, project3_link,
        hobby, 
        image: resumeImage
    })
    console.log(project1_name, project_count)
        res.render("resume",{createResume});
})

module.exports = router;