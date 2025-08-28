const mongoose = require('mongoose')

// Modelagem dos dados 
const HomeSchema = new mongoose.Schema({
    titulo:     { type: String, required: true },
    descricao:  { type: String, required: true },
})

const HomeModel = mongoose.model('Home', HomeSchema)

module.exports = HomeModel