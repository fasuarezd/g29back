const getTareas = (req, res) => {
    res.status(200).json({ messsage: 'getTareas' })
}

const crearTareas = (req, res) => {
    res.status(201).json({ messsage: 'crearTareas' })
}

const updateTareas = (req, res) => {
    res.status(200).json({ messsage: `Modificar la tarea ${req.params.id}` })
}

const deleteTareas = (req, res) => {
    res.status(200).json({ messsage: `Eliminar la tarea ${req.params.id}` })
}

module.exports = {
    getTareas,
    crearTareas,
    updateTareas,
    deleteTareas
}