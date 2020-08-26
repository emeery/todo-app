const express = require('express')
const Task = require('../models/task')

const router = express.Router()
// API Tarea
router.post('',  async(req, res) => {
    try {
      const task = new Task({
        title: req.body.title
    })
    await task.save()
    res.send(task)
    } catch (e) { res.status(400).send(e) }
});
router.get('', async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch (e) { res.status(500).send() }
});
router.get('/:id', async(req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) { res.status(200).json(task) }
    } catch (e) { res.status(500).send() }
});
router.put('/:id', async(req, res) => {
    try {
        const newTask = new Task({
            _id: req.body.id,
            title: req.body.title
        })
        await Task.updateOne({ _id: req.params.id }, newTask );
        res.status(200).json({ msg: 'tarea actualizada' })
    } catch (error) {
        res.status(404).send(e)
    }
});
router.delete('/:id', async(req, res) => {
try {
    const t = await Task.findOneAndDelete({
        _id: req.params.id,
    })
    if (!t) {
        return res.status(404).json({
            mensaje: 'no autorizado'
        })
    }
    res.status(200).json({ mensaje: 'tarea eliminada' })
} catch (e) { res.status(500).send() }
});
module.exports = router
