
const router = require('express').Router();
const Campus = require('../db/campus')
const Student = require('../db/student')

router.get('/campuses', async (req, res, next) => {

    const campuses = await Campus.findAll()
    res.send(campuses)
})

router.delete('/campuses/:id', async (req, res, next) => {
    try {
        const toBeDeleted = await Campus.findOne({ where: { id: req.params.id } })
        await toBeDeleted.destroy()
        res.send(toBeDeleted)
    } catch (err) {
        next(err)
    }
})

router.post('/campuses', async (req, res, next) => {
    try {
        res.send(await Campus.create(req.body))
    } catch (err) {
        next(err)
    }
})

router.put('/campuses/:id', async (req, res, next) => {
    try {
        const toBeUpdated = await Campus.findOne({ where: { id: req.params.id } })
        res.send(await toBeUpdated.update(req.body))
    } catch (err) {
        next(err)
    }
})

router.get('/students', async (req, res, next) => {
    const students = await Student.findAll()
    res.send(students)
})

router.delete('/students/:id', async (req, res, next) => {
    try {
        const toBeDeleted = await Student.findOne({ where: { id: req.params.id } })
        await toBeDeleted.destroy()
        res.send(toBeDeleted)
    } catch (err) {
        next(err)
    }
})

router.post('/students', async (req, res, next) => {
    try {
        res.send(await Student.create(req.body))
    } catch (err) {
        next(err)
    }
})

router.put('/students/:id', async (req, res, next) => {
    try {
        const toBeUpdated = await Student.findOne({ where: { id: req.params.id } })
        res.send(await toBeUpdated.update(req.body))
    } catch (err) {
        next(err)
    }
})

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
})

module.exports = router;