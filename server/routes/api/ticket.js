const express = require('express')
const router = express.Router()
const passport = require('passport')
const Ticket = require('../../models/ticket')
const Project = require('../../models/project')

const {validateTicketInput,validateStatusField, validatePriorityField} = require('../../validation/ticket')


// @route       POST api/ticket/create
// desc         create tokens
// access       private
router.post('/create',passport.authenticate('jwt', {session:false}),(req,res)=> {

    //validate ticket input sent by clinet
    const {errors, isValid} = validateTicketInput(req.body)
    if(!isValid) return res.status(400).send(errors)

    //find details of the requested project
    Project.findById(req.body.projectId)
    .then(project => {

        if(project)
        {
                let newTicket = {}
                newTicket.submitterId = req.user.id
                newTicket.projectId = req.body.projectId
                newTicket.title = req.body.title
                newTicket.description = req.body.description
                newTicket.priority = req.body.priority
                newTicket.type = req.body.type
                newTicket.status = 'active'
                newTicket.developers = project.developers
                newTicket.project_manager = project.manager

                //save new ticket
                new Ticket(newTicket).save()
                .then(ticket => {
                    return res.status(200).send({message:'ticket created successfully!', ticket})
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
     Ticket.findOne({_id:req.params.ticketId})
     .then(ticket => {
         if(ticket){
            return res.send(ticket)
         }
         else {
            return res.status(404).send({message:"ticket not found by this Id"})
         }
     })
     .catch(err => console.log(err))
})

// @route       POST api/ticket/update
// desc         update ticket details
// access       private
router.post('/update/:ticketId',passport.authenticate('jwt', {session:false}), (req,res) => {

    //validate ticket input sent by clinet
    const {errors, isValid} = validateTicketInput(req.body)
    if(!isValid) return res.status(400).send(errors)

    Ticket.findOne({_id:req.params.ticketId})
    .then( ticket => {
        if(ticket)
        {
            //check if ticket submitter is the user or not
            if(ticket.submitterId == req.user.id)
            {
                 ticket.title = req.body.title
                 ticket.description = req.body.description
                 ticket.status = req.body.status
                 ticket.priority = req.body.priority
                 ticket.type = req.body.type

                 ticket.save()
                 .then((updatedTicket)=> {
                     return res.status(200).send(updatedTicket)
                 })
                 .catch(err => console.log(err))
            }
            else{
                return res.status(403).end()
            }
        }
        else
        {
            return res.status(404).send({message:"ticket not found by this Id"})
        }
    })
})


// @route       POST api/ticket/change_status
// desc         change_status of a ticket
// access       private
router.post('/updatestatus/:ticketId',passport.authenticate('jwt', {session:false}), (req,res) => {

    //validate ticket input sent by clinet
    const {errors, isValid} = validateStatusField(req.body)
    if(!isValid) return res.status(400).send(errors)

    Ticket.findOne({_id:req.params.ticketId})
    .then( ticket => {
        if(ticket)
        {
            //check if user is submitter or project_manager then it will be change
            if(ticket.submitterId == req.user.id || ticket.project_manager == req.user.id)
            {
                 ticket.status = req.body.status

                 ticket.save()
                 .then((updatedTicket)=> {
                     return res.status(200).send(updatedTicket)
                 })
                 .catch(err => console.log(err))
            }
            else{
                return res.status(403).end()
            }
        }
        else
        {
            return res.status(404).send({message:"ticket not found by this Id"})
        }
    })
})



// @route       POST api/ticket/change_status
// desc         change_status of a ticket
// access       private
router.post('/updatepriority/:ticketId',passport.authenticate('jwt', {session:false}), (req,res) => {

    //validate ticket input sent by clinet
    const {errors, isValid} = validatePriorityField(req.body)
    if(!isValid) return res.status(400).send(errors)

    Ticket.findOne({_id:req.params.ticketId})
    .then( ticket => {
        if(ticket)
        {
            //check if ticket submitter is the user or not
            if(ticket.submitterId == req.user.id || ticket.project_manager == req.user.id)
            {
                 ticket.priority = req.body.priority

                 ticket.save()
                 .then((updatedTicket)=> {
                     return res.status(200).send(updatedTicket)
                 })
                 .catch(err => console.log(err))
            }
            else{
                return res.status(403).end()
            }
        }
        else
        {
            return res.status(404).send({message:"ticket not found by this Id"})
        }
    })
})



module.exports = router;