const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler(async (req, res) => {
    res.status(200).json({ messsage: 'getTareas' })
})

const crearTareas = asyncHandler(async (req, res) => {

    if (!req.body.texto) {
        res.status(400)
        throw new Error("Favor de escribir un texto")
    }

    res.status(201).json({ messsage: 'crearTareas' })
})

const updateTareas = asyncHandler(async (req, res) => {
    res.status(200).json({ messsage: `Modificar la tarea ${req.params.id}` })
})

const deleteTareas = asyncHandler(async (req, res) => {
    res.status(200).json({ messsage: `Eliminar la tarea ${req.params.id}` })
})

module.exports = {
    getTareas,
    crearTareas,
    updateTareas,
    deleteTareas
}