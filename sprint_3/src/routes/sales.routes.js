const express = require('express');
const router = express.Router();

const Sale = require('../models/sales');

router.get('/', async (req, res) =>{
    const sales = await Sale.find();
    console.log(sales);
    res.json(sales);
});

router.post('/', async (req, res) => {
    const { title, Descripcion } = req.body;
    const sale = new Sale({title, Descripcion});
    await sale.save();
    console.log(sale);
    res.json({status: 'Sale Saved'});
});

module.exports = router;