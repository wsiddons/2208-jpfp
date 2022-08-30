
const router = require('express').Router();
const Campus = require('../db/campus')
const Student = require('../db/student')

router.get('/campuses', async (req, res, next) => {
    const campuses = await Campus.findAll()
    res.send(campuses)
})

router.post('/campuses', async (req, res, next) => {
    try {
        res.send(await Campus.create(req.body))
    } catch (err) {
        next(err)
    }
})

router.get('/students', async (req, res, next) => {
    const students = await Student.findAll()
    res.send(students)
})

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
})

module.exports = router;