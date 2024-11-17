const express = require('express')
const router = express.Router()
const staff = require('../model/staff')

router.get("/admin", async (req,res)=> {
        const workers = await staff.find()
        // res.status(200).json(workers)

        if (workers.length === 0) {
            res.status(404).json({message:'no records found'})
        }
        else{
        res.status(200).json(workers)
        }
})

router.get("/admin/:id", async (req,res) => {
    const workers = await staff.findById(req.params.id)
    res.status(200).json(workers)
})

router.post("/admin", async (req,res) => {
    const workers = new staff({
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
        department: req.body.department,
        position: req.body.position
    })

    try {
        await workers.save()
        res.status(200).json(workers)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.patch("/admin/:id", async (req,res) => {
    try {
        const workers = await staff.findById(req.params.id)
        workers.fullname = req.body.fullname
        workers.username = req.body.username
        workers.password = req.body.password
        workers.department = req.body.department
        workers.position = req.body.position

        await workers.save()
        res.status(200).json(workers)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.delete("/admin", async (req,res) => {
    try {
        const workers = await staff.deleteMany()
        res.status(200).json({message: 'All data deleted successfully'})
    } catch (error) {
        res.status(401).send(error)
    }
})

router.delete("/admin/:id", async (req,res) => {
    try {
        const workers = await staff.findById(req.params.id)
        await workers.deleteOne()
        res.status(200).json({message: 'deleted successfully'})
    } catch (error) {
        res.status(401).send(error)
    }
})

 router.post("/staff", async (req,res) => {
    const workers = new staff({
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
        department: req.body.department,
        position: req.body.position

    })

    try {
        await workers.save()
        res.status(200).json(workers)
    } catch (error) {
        res.status(401).send(error)
    }
 })

 router.post("/manager", async (req,res) => {
    const workers = new staff({
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
        department: req.body.department,
        position: req.body.position
    })

    try {
        await workers.save()
        res.status(200).json(workers)
    } catch (error) {
        res.status(401).send(error)
    }
    
 })


module.exports = router