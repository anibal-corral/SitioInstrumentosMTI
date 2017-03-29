'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoordenadaSchema=  Schema({
latitud: String,
longitud: String
});

module.exports = mongoose.model('Coordenada', CoordenadaSchema);