const mongoose = require('mongoose')
// Esquema tarea
const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const Task = mongoose.model('task', taskSchema)
module.exports = Task;
