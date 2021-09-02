const express = require('express')
const router = express.Router()
const Project = require('../../models/project')
const passport = require('passport')

const validateProjectInputField = require('../../validation/project')

// @route      api/project/create
// desc        create project
// access      private
router.post('/create', passport.authenticate('jwt', {session:false}), (req,res) => {
    const {errors, isValid} = validateProjectInputField(req.body)
    if(!isValid) return res.status(400).send(errors)

    let newProject = {}
    newProject.title = req.body.title
    newProject.description = req.body.description
    newProject.status = req.body.status

    new Project(newProject).save()
    .then(project => {
        return res.status(200).send(project)
    })
    .catch(err => console.log(err))
})

// @route       GET api/project/view/:projectId
// desc         view project details
// access       private
router.get('/view/:projectId',passport.authenticate('jwt', {session:false}), (req,res) => {

    Project.findById(req.params.projectId)
    .then(project => {
        if(project)
        {
            return res.status(200).send(project)
        }
        else
        {
            return res.status(404).send({message:"project not found"})
        }
    })
})

// @route       POST api/project/update/projectID
// desc         uodate project details
// access       private (only the project manager or admin can update the details)
router.post('/update/:projectId', passport.authenticate('jwt', {session:false}), (req,res) => {

    //validate input fields d
    const {errors, isValid} = validateProjectInputField(req.body)
    if(!isValid) return res.status(400).send(errors)

    Project.findOne({_id:req.params.projectId})
    .then(project => {
        if(project){
            //now check if user is project manager or the admin
            if(project.manager == req.user.id || req.user.type == 'admin')
            {
                console.log(req.user);
            }
            else
            {
            return res.status(401).end()
            }
        }
        else
        {
            return res.status(404).send({message:"project not found by this Id"})
        }
    })
})

module.exports = router;
