const express = require('express');
const router = express.Router();

const Producto = require('../models/Producto');
const Usuario = require('../models/Usuario');

router.get('/productos', async (req, res) =>{
    const Productos = await Producto.find();
    res.json(Productos);
});

// GET all Tasks
router.get('/producto/:id', async (req, res) => {
    const Productos = await Producto.findById(req.params.id);
    res.json(Productos);
  });

router.post('/producto', async (req, res) => {
    const { descripcion, valor_unitario, estado } = req.body;
    const producto = new Producto({descripcion, valor_unitario, estado});
    await producto.save();
    res.json({status: 'Producto Guardado'});
});

router.put('/producto/:id', async (req, res) => {
    const { descripcion, valor_unitario, estado } = req.body;
    const newproducto = {descripcion, valor_unitario, estado};
    await Producto.findByIdAndUpdate(req.params.id, newproducto);
    res.json({status: 'Producto Actualizado'});
});

router.get('/usuarios', async (req, res) =>{
    const Usuarios = await Usuario.find();
    res.json(Usuarios);
});

router.post('/usuario', async (req, res) => {
    const { correo, rol } = req.body;
    const usuario = new Usuario({correo, rol});
    await usuario.save();
    res.json({status: 'usuario Guardado'});
});

router.put('/usuario/:id', async (req, res) => {
    const { correo, rol } = req.body;
    const newusuario = {correo, rol};
    await Usuario.findByIdAndUpdate(req.params.id, newusuario);
    res.json({status: 'usuario Actualizado'});
});

module.exports = router;