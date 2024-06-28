const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    texto: {
        type: String,
        required: [true, "Por favor teclea el texto de la tarea a realizar"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)