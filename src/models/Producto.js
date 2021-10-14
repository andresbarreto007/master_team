const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    descripcion: { type: String, required: true },
    valor_unitario: { type: String, required:true },
    estado: { type: String, required:true }
});

module.exports = mongoose.model('Producto', ProductoSchema);

//const SalesSchema = new Schema({
  //  title: { type: String, required: true },
    //Descripcion: { type: String, required:true }
//});

//module.exports = mongoose.model('Sales', SalesSchema);