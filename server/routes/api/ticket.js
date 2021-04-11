const express = require('express')
const router = express.Router()
const passport = require('passport')
const Ticket = require('../../models/ticket')
const Project = require('../../models/project')

const validateTicketInput = require('../../validation/ticket')

// @route       POST api/ticket/create
// desc         create tokens
// access       private
router.post('/create',passport.authenticate('jwt', {session:false}),(req,res)=> {

    //validate ticket input sent by clinet
    const {errors, isValid} = validateTicketInput(req.body)
    if(!isValid) return res.status(400).send(errors)

    //find details of the requested project
    Project.findById(req.body.projectId)
    then(project => {

        if(project)
        {
                let newticket = {}
                newTicket.submitterId = req.user.id
                newTicket.projectId = req.body.projectId
                newTicket.status = 'active'
                newTicket.title = req.body.title
                newTicket.description = req.body.description
                newTicket.priority = req.body.priority
                newTicket.developers = project.developers
                newTicket.project_manager = project.manager

                //save new ticket
                new Ticket(newTicket).save()
                .then(ticket => {
                    return res.status(200).send({message:'ticket created successfully!'})
                })
                .catch(err => console.log(err))
        }
        else
        {
            return res.status(404).send({message: "project not find by this Id"})
        }

    })
    .catch(err => console.log(err))
})

// @route       GET api/ticket/view
// desc         view details of ticket
// access       public
router.get('/view/:ticketId', (req,res) => {
     Ticket.findOne({id:req.param.ticketId})
     .then(ticket => {
         if(ticket){
            return res.send(ticket)
         }
         else {
            return res.status(404).send({message:"ticket now found by this Id"})
         }
     })
     .catch(err => console.log(err))
})

module.exports = router;