'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstablecimientoSchema=  Schema({
nombre: String,
rut: String,
ubicacion: String,
telefono: String,
horario: String,
instrumentos:  [{ type: Schema.ObjectId, ref: 'Producto' }]
});

module.exports = mongoose.model('Establecimiento', EstablecimientoSchema);