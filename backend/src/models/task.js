const mongoose = require('mongoose')
// Esquema tarea
const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25
    }
}, { timestamps: true })

const Task = mongoose.model('task', taskScheema)
module.exports = Task;
