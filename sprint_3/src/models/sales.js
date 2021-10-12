const mongoose = require('mongoose');
const { Schema } = mongoose;

const SalesSchema = new Schema({
    title: { type: String, required: true },
    Descripcion: { type: String, required:true }
});

module.exports = mongoose.model('Sales', SalesSchema);