const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, "Por favor teclea el texto de la tarea a realizar"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)