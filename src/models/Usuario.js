const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    correo: { type: String, required: true },
    rol: { type: String, required:true }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

//const SalesSchema = new Schema({
  //  title: { type: String, required: true },
    //Descripcion: { type: String, required:true }
//});

//module.exports = mongoose.model('Sales', SalesSchema);